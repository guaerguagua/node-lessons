# 《Node.js 中 webpack-dev-server使用》

### 开始
webpack 是js中用来打包编译项目模块的工具，一旦被安装，你能够通过CLI命令行或者API接口的方式调用,把项目目录下的文件打包成一个文件js输出给浏览器使用
而webpack-dev-server是在开发过程中启动一个webpack的自动打包和发布的微型服务，有自动刷新和模块热替换功能。
例如：在部署了webpack-dev-server的项目中，直接修改代码，就可以在马上在浏览器看到结果

webpack-dev-server的github地址：https://github.com/webpack/webpack-dev-server

### 核心概念
对于现代js应用来说webpack的核心是一个静态模板打包机。当在你的应用使用webpack的时候，它能够递归的创建一个包含你的应用所需要使用的所有模块的依赖图，然后把所有这些模块
打包成一个或者多个bundles。
它的可配置难以置信的好用，但是为了开始你只需要了解四个核心概念：

*Entry
*Output
*Loaders
*Plugins

这里有一个配置文件例子：
webpack.config.js
```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```
Entry:
entry属性指出哪些模块webpack应该打包。然后webpack会把entry指出的这些模块打包进叫做bundle的文件，输出由output指定。根据你的应用需求，你能够使用多种方式配置entry属性，
并且可以在webpack的配置文件中指定一个enry（或者多个）,。
更多的请看Entry章节
Output:
output属性告诉webpack应该在哪里存放打包出来的bundles，并且命名。在上面的这个例子里，我们使用output.path和output.filename指定存放bundles文件的路径和名称。
Loaders:
loaders允许webpack支持更多格式的文件，不仅仅只是js文件（webpack自己只理解js文件）。loaders能够把所有类型的文件转化成webpack可用的模块。
在你的webpack配置文件loaders有两个目的:
1.test属性指出哪些文件应该被转化
2.use属性指出哪个loader应该被使用来完成转化
在上面的例子中，在rules属性里定义了一个loaders，告诉webpack当发现代码中使用`require/import` .txt结尾的文件时候，使用raw-loader转化器转化成webpack能理解的module。
plugins:
plugins能够做更多的事。plugins的接口非常强大，能够被用来做非常多类型的任务。
为了使用plugin，你需要`require()`它并且加入plusins的数组。大部分的plugins是可通过选项定制的。由于你可能会在配置文件中使用同一个plugin很多次，所有需要通过new操作创建它的实例来调用。
webpack提供了很多的plugins！更多信息请看plugins列表![](https://webpack.js.org/plugins/)
### 详解webpack-dev-server的配置属性
先看一下webpack的机制
![](https://github.com/guaerguagua/node-lessons/blob/master/demo1/01.png)
webpack配置src路径和dist路径，把src文件打包进dist区域的bundle.js

配置文件为webpack.config.js
```js
var webpack = require('webpack')
var path =require('path')
module.exports = {
entry:{
   app:path.join(__dirname,'src','index.js')
},
output:{
   filename:'bundle.js',
   path:path.join(__dirname,'dist')
  }
}
```
### webpack-dev-server的自动刷新和模块热替换机制
### 使用node的API来实现启动webpack服务
```js
var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
       /*我们写入配置的地方*/
});
server.listen(8080);
```
访问http://localhost:8080

参考：https://www.cnblogs.com/penghuwan/p/6941616.html


