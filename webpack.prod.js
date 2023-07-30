const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config')
const path = require("path");

module.exports = merge(webpackConfig, {
    mode: 'production',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[hash].js',
        clean: true
    }
})
