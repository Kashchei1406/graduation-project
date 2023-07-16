const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    plugins: [
       new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'src', 'index.html')
       })
    ]
}