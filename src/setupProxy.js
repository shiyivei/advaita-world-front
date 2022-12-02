const {
  createProxyMiddleware,
} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "https://api-connect.2fei2.com",
      pathRewrite: {
        "^/api1": "",
      },
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    createProxyMiddleware("/api2", {
      target: "https://api-connect.2fei2.com",
      pathRewrite: {
        "^/api2": "",
      },
      changeOrigin: true,
      secure: false,
    })
  );

  app.use(
    createProxyMiddleware("/api3", {
      target: "http://localhost:3030",
      pathRewrite: {
        "^/api3": "",
      },
      changeOrigin: true,
      secure: false,
    })
  );
};
