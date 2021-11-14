const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist") 
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
               
                test: /\.(ts)|(js)$/,
                exclude: /node_modules/,
                
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                        ]
                    }
                    
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    devServer: {
      //  contentBase: path.resolve(__dirname, "dist"),
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ]
}