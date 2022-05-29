var path = require('path');
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HTMLWebpackPluginConfig =   new HTMLWebpackPlugin(
    {
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    }
);
/* exports */
module.exports = {
    entry :  './src/index.js',
    mode: 'development',
    output:{
      filename: 'index.bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname , './dist')
      },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            exclude : /node_modules/,
            loader: 'babel-loader',
            options: {presets:["@babel/preset-env","@babel/preset-react"]}
        },
        {
            test: /\.(scss|sass|css)$/i,
            exclude : /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'file-loader'],
        },
        {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
        }
        ] 
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
   
    devServer: {
        port: 3000
      },
    plugins:[
        new webpack.HotModuleReplacementPlugin() ,HTMLWebpackPluginConfig,
        new MiniCssExtractPlugin({
            filename: '[name].css' ,
            chunkFilename: '[id].css',
          })
    ]
};