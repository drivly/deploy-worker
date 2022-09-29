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
  // core.setOutput("bundle", worker)
  const cloudflareAccountId = core.getInput('cloudflareAccountId')
  const cloudflareToken = core.getInput('cloudflareToken')

  const results = await fetch('https://workers.do/api/deploy', {
    method: 'POST',
    body: { 
      cloudflareAccountId,
      cloudflareToken,
      worker,
    },
  }).then(res => res.json())
  
  console.log(`The ESBuild output: ${worker}`)
} catch (error) {
  core.setFailed(error.stack)
}