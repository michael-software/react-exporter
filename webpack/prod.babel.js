import {optimize, DefinePlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
    entry: [
        path.join(__dirname, '..', 'src', 'example', 'HelloWorld', 'Example.jsx')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new optimize.UglifyJsPlugin(),
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'src', 'example', 'index.html'),
            filename: 'index.html'
        })
    ]
};