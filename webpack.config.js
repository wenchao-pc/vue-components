/**
 * Created by kuo zi on 2016/7/11.
 */
var webpack = require("webpack");
var env = process.env.NODE_ENV;

var config = {
    entry: "./src/index.js",
    output: {
        path: "./dist",
        publicPath: "dist/",
        filename: "app.js"
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: "vue"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};
if (env === "production") {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    config.devtools = "#source-map";
}

module.exports = config;