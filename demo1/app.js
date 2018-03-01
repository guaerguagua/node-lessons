
var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
       /*我们写入配置的地方*/
});
server.listen(8080);

require('./dist/bundle.js')