const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.js'),
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '..', './public/images'),
                    to: path.resolve(__dirname, '..', './build/images'),
                    noErrorOnMissing: true
                },
                {
                    from: path.resolve(__dirname, '..', './public/data'),
                    to: path.resolve(__dirname, '..', './build/data'),
                    noErrorOnMissing: true
                },
            ]
        })
    ]
}