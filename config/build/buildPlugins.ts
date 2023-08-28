import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const buildPlugins = (pathHtml: string): webpack.WebpackPluginInstance[] => {

    return [
        new HtmlWebpackPlugin({
            template: pathHtml
        })
    ]
}
