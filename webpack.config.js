const path = require('path');

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoderPlugin = require('vue-loader/lib/plugin');


const isDev = process.env.NODE_ENV === 'development';

console.log('isDev', isDev);

const config = {
    target: 'web',
    entry: path.join(__dirname, 'web/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpeg|jpg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        // 判断开发、生产环境 cross-env 跨window、OS
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoderPlugin(),
        // index.js生成html文件
        new HTMLPlugin()
    ]
}

if (isDev) {
    config.module.rules.push(
        {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        // 不另外生成sourceMap，直接使用stylus-loader生成的sourceMap
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        },
    );
    config.devtool = '#cheap-module-eval-source-map',
        config.devServer = {
            port: 8000,
            // 不仅localhost，而且内网ip可访问
            host: 'localhost',
            overlay: {
                // errors 显示在页面上
                error: true,
            },
            hot: true,
            // 地址映射
            // historyFallback: {

            // }

        },
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )
    // config.mode = 'development';
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        verdor: ['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push(
        {
            test: /\.styl$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    );
    // config.optimization = {
    //     splitChunks: {
    //         name: 'vendor'
    //     }
    // },
    // // config.optimization = {
    // //     splitChunks: {
    // //         name: 'runtime'
    // //     }
    // // }
    config.plugins.push(
        new ExtractTextPlugin('styles.[contentHash:8].css'),
    );
}

console.log('config', config);


module.exports = config;