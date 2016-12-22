var path = require('path')
var config = require('./config')
var utils = require('./utils')
var merge = require('webpack-merge')

module.exports = {
  //entry: utils.getEntries('./src/module/**/*.js'),
  entry: {
    app: './src/module/index/index.js',
    components: utils.getComponentsEntries('./src/components/**/index.js')
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: merge({'vue': 'vue/dist/vue.js'}, utils.getComponentsPath('./src/components/**/index.js'))
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: require('./config/module.cfg.js'),
  vue: require('./config/vue.cfg.js')
}
