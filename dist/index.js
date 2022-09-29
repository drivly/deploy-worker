(() => {
  // http-url:https://pkg.do/-/apis.do@v0.1.4-Mex89NkRiV64L912OZmg/dist=es2019,mode=imports/optimized/apis.do.js
  var apis$1 = {
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
    "esbuild.do": {
      icon: "\u26A1\uFE0F",
      type: "code",
      description: "ESBuild as a Service",
      endpoints: {
        build: "/:url"
      },
      examples: {
        buildPackage: "https://esbuild.do/pkg.do/lodash",
        buildGeneratedWorker: "https://esbuild.do/worker.do/cube/x=5/x^3",
        buildGist: "https://gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/0c8ef49c00d3614b04c1228f279c556c96ef14b8/index.js"
      }
    },
    "gist.do": {
      icon: "\u{1F6E0}",
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
    },
    "worker.do": {
      icon: "\u{1F44C}",
      type: "code",
      description: "Generate Worker from any JavaScriptFunction",
      endpoints: {
        buildCode: "/:name/:args/:code",
        buildFile: "/:name/:args/:url"
      },
      examples: {
        workerFromScript: "https://worker.do/cube/number=5/5^3",
        workerFromGist: "https://worker.do/math/number=5/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js"
      }
    }
  };
  var apis$2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    default: apis$1
  });
  var categories = Object.entries(apis).reduce((acc, [name, item]) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push({ name, ...item });
  }, {});

  // worker.js
  var worker_default = {
    fetch: () => new Response(JSON.stringify({ apis: apis$2 }))
  };
})();
