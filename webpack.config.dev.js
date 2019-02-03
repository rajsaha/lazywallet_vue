'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const SWPrecache = require('sw-precache-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new SWPrecache({
        cacheId: 'lazywallet',
        filepath: 'service-worker.js',
        staticFileGlobs: [
          'index.html',
          'manifest.json',
          'dist/*.{js,css}'
        ],
        stripPrefix: '/'
      })
  ]
}