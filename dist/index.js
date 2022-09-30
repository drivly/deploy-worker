(() => {
  // http-url:https://pkg.do/-/apis.do@v0.1.4-Mex89NkRiV64L912OZmg/dist=es2019,mode=imports/optimized/apis.do.js
  var json = (data) => new Response(JSON.stringify(data, null, 2), { headers: { "content-type": "application/json; charset=utf-8" } });
  var categories = Object.entries(apis).reduce((acc, [name, item]) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push({ name, ...item });
  }, {});

  // worker.js
  var worker_default = {
    fetch: () => json({ hello: "world" })
  };
})();
