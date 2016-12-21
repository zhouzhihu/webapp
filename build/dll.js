var fs = require('fs');
var rimraf = require('rimraf');
var config = require('../config')
rimraf(config.dll.dir, fs, function cb() {
  console.log('dll目录已清空');
});
