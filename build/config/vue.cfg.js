var utils = require('../utils')

module.exports = {
  loaders: utils.cssLoaders(),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}
