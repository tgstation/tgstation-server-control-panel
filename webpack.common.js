const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        //babel: '@babel/polyfill',
        main: './src/index.tsx'
    },

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                packages: {
                    maxInitialRequests: Infinity,
                    minSize: 5000,
                    priority: 3,
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `vendors/npm.${packageName.replace('@', '')}`;
                    }
                } /*
                packages: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'packages'
                },*/,
                api: {
                    priority: 1,
                    test: /[\\/]clients[\\/]/,
                    enforce: true
                }
            }
        }
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        symlinks: false
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [require('autoprefixer')];
                            }
                        }
                    },
                    {
                        loader: 'fast-sass-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-loader'
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                    exclude: ['transform-regenerator']
                                }
                            ],
                            '@babel/preset-typescript',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                            /*[
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: false
                                }
                            ],*/
                            'react-hot-loader/babel'
                        ]
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'TG Server Control Panel v0.4.0',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    toType: 'dir'
                }
            ]
        })
    ],
    node: {
        fs: 'empty'
    }
};