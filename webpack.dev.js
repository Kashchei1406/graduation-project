const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config')
const path = require("path");


module.exports = merge(webpackConfig, {
    mode: 'development',
    entry: path.resolve(__dirname, 'src','index.tsx')
})
