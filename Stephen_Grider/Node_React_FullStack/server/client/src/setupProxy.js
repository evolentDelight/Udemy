const { createProxyMiddleWare } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleWare({
      target: "http://localhost:5000",
    })
  )
}

/* Stephen Grider Node React Course
  Do not add proxy configuration
  Do not add changeOrigin: true to proxy script
*/