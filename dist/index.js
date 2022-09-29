(() => {
  // http-url:https://pkg.do/-/apis.do@v0.1.3-bZaXisgRVhJ6EuE87TTw/dist=es2019,mode=imports/optimized/apis.do.js
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
    "gist.do": {
      icon: "\u26A1\uFE0F",
      type: "code",
      description: "Abstract Syntax Tree Parser",
      endpoints: {
        deployWorker: "/:gist",
        invokeWorker: "https://gist.gist.do"
      },
      examples: {
        publish: "https://gist.do/28a6b4bfde485b704a2fcc9b6c874e79",
        invokeWorker: "https://28a6b4bfde485b704a2fcc9b6c874e79.gist.do",
        publishAPI: "https://gist.do/api/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79",
        publishWorker: "https://gist.do/worker/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79"
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
    },
    "syntax.do": {
      icon: "\u26A1\uFE0F",
      type: "code",
      description: "Abstract Syntax Tree Parser",
      endpoints: {
        parseScript: "/:code",
        parseModule: "/:url"
      },
      examples: {
        parseScript: "https://syntax.do/x=x+3",
        parseGist: "https://syntax.do/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js"
      }
    }
  };

  // worker.js
  var worker_default = {
    fetch: () => json({ apis })
  };
})();
