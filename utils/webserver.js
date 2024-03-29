var WebpackDevServer = require("webpack-dev-server"),
    webpack = require("webpack"),
    config = require("../webpack.config"),
    env = require("./env"),
    path = require("path")

require("./prepare")

var options = {}
var excludeEntriesToHotReload = (options.notHotReload || [])

for (var entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    config.entry[entryName] =
      [
        ("webpack-dev-server/client?http://localhost:" + env.PORT),
        "webpack/hot/dev-server"
      ].concat(config.entry[entryName])
  }
}

config.plugins =
  [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || [])

var compiler = webpack(config)

var server =
  new WebpackDevServer(compiler, {
    hot: true,
    contentBase: path.join(__dirname, "../build"),
    headers: { "Access-Control-Allow-Origin": "*" },
    stats: {
      colors: true,
      chunks: false
    }
  })

server.listen(env.PORT)
