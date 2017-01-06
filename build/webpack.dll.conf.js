const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')
const utils = require('./utils')

module.exports = {
  entry: {
    vendor: utils.getDependencies()
  },
  output: {
    path: config.dll.dir,
    filename: '[name].dll.js',
    library: '[name]_library', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DllPlugin({
      path: 'manifest.json', // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]_library',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: config.projectRoot, // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
    new ExtractTextPlugin('[name].dll.css'), // 打包css/less的时候会用到ExtractTextPlugin
  ],
  module: require('./config/module.cfg.js'),
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {'vue': 'vue/dist/vue.js'}
  },
  vue: require('./config/vue.cfg.js')
};