const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config.json');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', createProxyMiddleware({
  target: config.proxyUrl,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/': '/',
  },
}));

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
