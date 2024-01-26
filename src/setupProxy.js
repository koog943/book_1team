const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/test',
    createProxyMiddleware({
      target: 'http://localhost:8088',  // 실제 서버 주소
      changeOrigin: true,
    })
  );
  app.use(
    '/bookflix/user',
    createProxyMiddleware({
      target: 'http://localhost:8088',  // 실제 서버 주소
      changeOrigin: true,
    })
  );
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://localhost:8088',  // 실제 서버 주소
      changeOrigin: true,
    })
  );
  app.use(
    '/books/...',
    createProxyMiddleware({
      target: 'http://localhost:8088',  // 실제 서버 주소
      changeOrigin: true,
    })
  );
};