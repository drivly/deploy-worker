import fs from 'fs'
import core from '@actions/core'
import github from '@actions/github'
import fetch from 'node-fetch'
import esbuild from 'esbuild'
import httpPlugin from 'esbuild-plugin-http'

try {
  const time = (new Date()).toTimeString()

  //console.log(JSON.stringify(github.context , null, 2))
  await esbuild.build({
    entryPoints: [core.getInput('main')],
    bundle: true, 
    format: 'esm',
    outfile: core.getInput('outfile'),
    plugins: [httpPlugin],
  }).catch(() => process.exit(1))

  const worker = fs.readFileSync(core.getInput('outfile'))
  console.log(`The ESBuild output: ${worker}`)

  const name = core.getInput('name') ?? github.context.repository.name
  const cloudflareAccountId = core.getInput('cloudflareAccountId')
  const cloudflareApiToken = core.getInput('cloudflareApiToken')

  const deployment = await fetch('https://workers.do/api/deploy', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      context: github.context,
      worker: `${worker}`,
      cloudflareAccountId: `${cloudflareAccountId}`,
      cloudflareApiToken: `${cloudflareApiToken}`,
    }),
  }).then(res => res.json()).catch(({name, message, stack}) => ({ error: {name, message, stack}}))
  
  const url = deployment?.url
  if (url) {
    core.setOutput("url", url)
    console.log(`The deployment results: ${JSON.stringify(deployment, null, 2)}`)
  } else {
    core.setFailed(JSON.stringify(deployment, null, 2))
  }

} catch (error) {
  core.setFailed(error.stack)
}