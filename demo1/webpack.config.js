var webpack = require('webpack')
var path =require('path')
module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:8080/',
	   	path.join(__dirname,'src','index.js')	
	],
	plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
	output:{
	   filename:'bundle.js',
	   path:path.join(__dirname,'dist')
	},
	devServer: {
        inline:true,
        hot:true
    }
}