var path = require('path')
var config = require('./config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
    new webpack.NoErrorsPlugin(),
    new webpack.DllReferencePlugin({
      context: config.projectRoot, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
      manifest: require('../manifest.json'), // 指定manifest.json
      name: 'vendor_library'  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: '起步-Starting',
      filename: 'index.html',
      template: './src/module/index/index.html',
      inject: true
    })
  ]
})


//var pages = utils.getEntries('./src/module/**/*.html')
//for(var page in pages) {
//  // 配置生成的html文件，定义路径等
//  var conf = {
//    filename: page + '.html',
//    template: pages[page], //模板路径
//    inject: true,
//    // excludeChunks 允许跳过某些chunks, 而chunks告诉插件要引用entry里面的哪几个入口
//    // 如何更好的理解这块呢？举个例子：比如本demo中包含两个模块（index和about），最好的当然是各个模块引入自己所需的js，
//    // 而不是每个页面都引入所有的js，你可以把下面这个excludeChunks去掉，然后npm run build，然后看编译出来的index.html和about.html就知道了
//    // filter：将数据过滤，然后返回符合要求的数据，Object.keys是获取JSON对象中的每个key
//    excludeChunks: Object.keys(pages).filter(item => {
//      return (item != page)
//    })
//  }
//  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
//  module.exports.plugins.push(new HtmlWebpackPlugin(conf))
//}
