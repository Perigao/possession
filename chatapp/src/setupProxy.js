const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://chat.80boys.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    }),
  );
};
