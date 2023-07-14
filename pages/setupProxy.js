const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://hackathon-backend-25p3nguxwa-de.a.run.app',
      changeOrigin: true,
    })
  );
};