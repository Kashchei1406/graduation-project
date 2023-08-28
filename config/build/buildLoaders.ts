import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {

    const typescriptLoader = {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']

    }

    return [typescriptLoader]
}
