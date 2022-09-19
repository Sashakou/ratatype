const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: 'assets/[hash][ext]'
    },
    devtool: 'source-map',
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        open: true,
        watchFiles: ["./src/*"],

    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
            //filename: '[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            scriptLoading: 'blocking'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            // {
            //     test: /\.(ttf|woff|woff2|eot)$/,
            //     loader: "file?name=src/fonts/[name].[ext]",
            //     // use: [
            //     //     {
            //     //         //loader: "file-loader",
            //     //         options: {
            //     //             name: '[name].[ext]',
            //     //             outputPath: 'src/fonts/'
            //     //         }
            //     //     }
            //     // ],
            // }
        ]
    }
}