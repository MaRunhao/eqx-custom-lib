const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: path.resolve(__dirname, './test/index.ts'),
    output: {
        path: path.resolve(__dirname, 'testDir'),
        filename: 'test.js'
    },
    devServer: {
        port: 3443
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            'chrome': '90'
                                        },
                                        corejs: '3',
                                        useBuiltIns: 'usage'
                                    }
                                ]
                            ]
                        }
                    }, 
                    'ts-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}