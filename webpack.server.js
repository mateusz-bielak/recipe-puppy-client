#!/usr/bin/env node

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.development')

const server = new WebpackDevServer(webpack(config), {
  hot: true,
  inline: true,
  noInfo: true,
  stats: {
    colors: true,
    stats: 'errors-only',
    chunks: false,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  historyApiFallback: true,
  publicPath: '/',
  proxy: {
    '/api/**': {
      target: 'http://www.recipepuppy.com',
      secure: false,
      changeOrigin: true,
    },
  },
})

server.listen(4000, '0.0.0.0', () => {
  console.log('Starting server on http://localhost:4000')
})
