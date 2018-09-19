const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env.mode}.config.js`)(env);

module.exports = env => {

    console.log(env);       
        return webpackMerge(
            {
                mode: env.mode,
                output: {
                    filename: 'bundle.js'
                },
                plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
            }, 
            modeConfig(env)
    )
}
