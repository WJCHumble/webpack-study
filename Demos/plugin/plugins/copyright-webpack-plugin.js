const {
  compilation
} = require("webpack")

class CopyrightWebpackPlugin {
  constructor(options) {
    console.log(options)
  }

  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('compiler')
    })
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      compilation.assets['copyright.txt'] = {
        source: function () {
          return 'copyright by wjc'
        },
        size: function () {
          return 17
        }
      }
      cb()
    })
  }
}

module.exports = CopyrightWebpackPlugin