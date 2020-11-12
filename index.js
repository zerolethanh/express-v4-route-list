module.exports = function(app) {
  if (!app._router) return;
  return app._router.stack          // registered routes
      .filter(r => r.route)    // take out all the middleware
      .map(r => [r.route.methods, r.route.path]) // get all the paths
      .map(arr =>
          `${Object.keys(arr[0]).
              map(method => method.toUpperCase()).
              join(',')} ${arr[1]}`).join(`\n`);
};
