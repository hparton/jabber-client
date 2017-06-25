var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        app: [
            './src/main.js',
            './src/scss/main.scss'
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },

    devServer: {
        quiet: true,
        stats: 'minimal',
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                    })
                }
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            },{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[ext]?[hash]'
            }
        }, ]
    },

    plugins: [
        extractSass,
        new FriendlyErrorsWebpackPlugin()
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

};
