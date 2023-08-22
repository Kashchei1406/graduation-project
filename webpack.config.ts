import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src','index.tsx'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[hash].js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },

    plugins: [
       new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'public', 'index.html')
       })
    ]
}

export default config;
