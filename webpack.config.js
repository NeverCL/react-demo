var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');         //创建html
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //抽取css文件
var path = require('path');
var distPath = path.resolve(__dirname, 'dist');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./",
        port: 8080,
    },
    entry: {
        main: './src/main',
        // polyfill: 'babel-polyfill',
        vender: ['react', 'react-dom', 'babel-polyfill']
    },
    output: {
        path: distPath,
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".tsx"]// 添加需要解析的文件格式
    },
    devtool: "source-map",// 启用调试
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        //  {
        //     test: /\.css$/,
        //     loader: 'style!css'
        // },
        {
            test: /\.less$/,
            // loader: 'css!less'
            loader: ExtractTextPlugin.extract('css!less')
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&name=img/[name].[ext]?[hash]'
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//dev hot
        new ExtractTextPlugin('site.css'),
        new HtmlwebpackPlugin({
            title: 'hello',
            filename: 'index.html',
            template: './src/index.html',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vender', 'js/vender.js'),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/webpack-dev-server/index.html'
        })
    ]
}