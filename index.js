import fs from 'fs'
import core from '@actions/core'
import github from '@actions/github'
import fetch from 'node-fetch'
import esbuild from 'esbuild'
import httpPlugin from 'esbuild-plugin-http'

try {
  const time = (new Date()).toTimeString()

  console.log(JSON.stringify(github.context , null, 2))
  await esbuild.build({
    entryPoints: [core.getInput('main')],
    bundle: true, 
    outfile: core.getInput('outfile'),
    plugins: [httpPlugin],
  }).catch(() => process.exit(1))

  const worker = fs.readFileSync(core.getInput('outfile'))
  console.log(`The ESBuild output: ${worker}`)

  const {context} = github
  const name = core.getInput('name') ?? context.repository.name
  const cloudflareAccountId = core.getInput('cloudflareAccountId')
  const cloudflareApiToken = core.getInput('cloudflareApiToken')


  const results = await fetch('https://workers.do/api/deploy', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      context,
      worker,
      cloudflareAccountId,
      cloudflareApiToken,
    }),
  }).then(res => res.text()).catch(({name, message, stack}) => ({ error: {name, message, stack}}))
  

  core.setOutput("url", results)
  console.log(`The deployment results: ${results}`)

} catch (error) {
  core.setFailed(error.stack)
}