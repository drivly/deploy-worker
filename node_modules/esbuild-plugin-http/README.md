# ESBuild Plugin to allow HTTP Imports

```
const esbuild =  require('esbuild')
const httpPlugin =  require('esbuild-plugin-http')

esbuild.build({
    entryPoints: ['./worker.js'],
    bundle: true,
    outfile: './dist/index.js',
    plugins: [httpPlugin],
  }).catch(() => process.exit(1))
```

worker.js:
```
import { apis, json } from 'https://pkg.do/apis.do@0.1.0'

export default {
    fetch: () => json({apis})
}
```

dist/index.js:
```
  // http-url:https://pkg.do/-/apis.do@v0.1.0-nHviMlSrf8ac1z8OcKGJ/dist=es2019,mode=imports/optimized/apis.do.js
  var json = (data) => new Response(JSON.stringify({ user, redirect, body, data }, null, 2), { headers: { "content-type": "application/json; charset=utf-8" } });
  var categories = apis.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
  }, {});
  var apis = {
    "apis.do": {
      icon: "\u{1F680}",
      type: "core",
      description: "Hypermedia-driven API Directory",
      endpoints: {
        listCategories: "/api",
        getCategory: "/:type",
        search: "/search/:term"
      },
      examples: {
        getUtilities: "/utilities",
        searchForData: "/search/data"
      }
    },
    "pkg.do": {
      icon: "\u{1F4E6}",
      type: "code",
      description: "Simple Package Bundle CDN",
      endpoints: {
        getPackage: "/:package"
      },
      examples: {
        getAPIs: "/apis.do",
        getLodash: "/lodash-es",
        getVersion: "/lodash-es@4.17.21"
      }
    }
  };

  // test/worker.js
  var worker_default = {
    fetch: () => json({ apis })
  };
})();
```
