const esbuild =  require('esbuild')
const httpPlugin = require('../index.js')

esbuild.build({
    entryPoints: ['./test/worker.js'],
    bundle: true,
    outfile: './test/dist.js',
    plugins: [httpPlugin],
  }).catch(() => process.exit(1))