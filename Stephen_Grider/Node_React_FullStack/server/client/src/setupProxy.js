const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};

/* Stephen Grider Node React Course
  Do not add proxy configuration
  Do not add changeOrigin: true to proxy script
*/

/*
  Create React App automatically looks for this file in src directory!
  Uses the NodeJS format
  Does not apply to production build

  Logic Applied:
  If React App's server initiates that link, then this middleware executes the proxy to localhost:5000
  */
