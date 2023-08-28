import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths, isDev} = options;

  return {
      mode: mode,
      entry: paths.entry,
      output: {
          path: paths.build,
          filename: 'bundle.[hash].js',
          clean: true
      },

      module: {
          rules: buildLoaders(),
      },

      plugins: buildPlugins(paths.html),

      resolve: {
          extensions: ['.tsx', '.ts', '.jsx', '.js']
      },

      devtool: isDev? "inline-source-map": undefined,

      devServer: isDev ? buildDevServer(options) : undefined,



  }
}
