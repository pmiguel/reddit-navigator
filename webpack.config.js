const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'extension.build.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/css' },
            { from: 'assets', to: './assets/'},
            { from : 'manifest.json' }
        ])
    ]
};