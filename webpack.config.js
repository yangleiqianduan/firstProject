
var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("./node_modules/webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
    entry: {
        test1 :'./js/test1.js',
        test2 :'./js/test2.js'
    },
    output: {
        path: './src',
        filename: "[name].js"
    },
    plugins: [
        // 公共js
        new CommonsChunkPlugin('common.js'),
        // 混淆、压缩js
        new UglifyJsPlugin()
    ]
};