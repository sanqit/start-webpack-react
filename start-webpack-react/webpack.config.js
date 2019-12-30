"use strict";
{
    const path = require("path");
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = (env, argv) => {
        const isDevelopment = argv.mode === 'development';;
        return ({
            entry: {
                index: ["./src/index.tsx"]
            },
            output: {
                path: path.join(__dirname, "/dist"),
                filename: "[name].js"
            },
            mode: argv.mode,
            devtool: isDevelopment
                ? '#eval-source-map'
                : 'source-map',
            devServer: {
                stats: {
                    children: false,
                    maxModules: 0
                },
                port: 3001
            },
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".jsx"]
            },
            module: {
                rules: [
                    {
                        test: /\.ts(x?)$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: "ts-loader"
                            }
                        ]
                    },
                    {
                        test: /\.s[ac]ss$/,
                        use: ["style-loader", "css-loader", "sass-loader"]
                    },
                    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                    {
                        enforce: "pre",
                        test: /\.js$/,
                        loader: "source-map-loader"
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./src/index.html"
                })
            ],
        })
    };
}