import {BuildOptions} from "./types/config";
import type { Configuration as ConfigurationDevServer} from "webpack-dev-server"

export const buildDevServer = (options: BuildOptions): ConfigurationDevServer => {

    return {
        port: options.port,
        hot: true,
    }
}
