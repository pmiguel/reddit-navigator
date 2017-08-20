const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const manifest = require('./manifest.json');
const webpack = require('webpack');

const usePlugins = [
    new webpack.DefinePlugin({
        ENV: {
            development: false,
            version: `${manifest.version}`
        },
    }),
    new CopyWebpackPlugin([
        { from: 'src/css' },
        { from: 'assets', to: './assets/'},
        { from : 'manifest.json' }
    ]),
    new ZipPlugin({
        path: '../release',
        filename: `reddit-navigator-${manifest.version}-${Date.now()}.zip`
    }),
];

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'extension.build.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    plugins: usePlugins,
};