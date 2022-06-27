const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

function optimization() {
	const config = {
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: 'vendor-scripts',
					chunks: 'initial',
					minChunks: 2
				},
			}
		}
	}

	if (isProd) {
		config.minimizer = [
			new CssMinimizerPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config;
}



module.exports = function () {
	return {
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'bundle.js',
			publicPath: '/dist/'
			//assetModuleFilename: '[name]-[hash:6][ext]'
		},
		optimization: optimization(),
		devtool: isDev ? 'source-map' : false,
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css'
			}),
			new CleanWebpackPlugin()
		],
		externals: {
			jquery: 'jQuery'
		},
		module: {
			rules: [
				{
					test: /\.js|jsx$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							],
							plugins: [
								['@babel/plugin-proposal-class-properties']
							]
						}
					}
				},
				{
					test: /\.css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader']
				},
				{
					test: /\.less$/,
					exclude: /node_modules/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						//'resolve-url-loader',
						'less-loader'
					]
				},
				{
					test: /icons.*\.svg$/,
					use: [
						{ loader: 'svg-sprite-loader' },
						{
							loader: 'svgo-loader',
							options: {
								plugins: [
									{
										name: 'removeViewBox',
										active: false
									},
									{
										name: 'removeDimensions',
										active: true
									},
									{
										name: 'removeAttrs',
										params: {
											attrs: '(fill|stroke)'
										}
									}
								]
							}
						}
					]
				},
				{
					test: /colorIcons.*\.svg$/, //for color icons
					use: [
						{
							loader: 'svg-sprite-loader',
						},
						{
							loader: 'svgo-loader',
							options: {
								plugins: [
									{
										name: 'removeViewBox',
										active: false
									},
									{
										name: 'removeDimensions',
										active: true
									}
								]
							}
						}
					]
				},
				{
					test: /\.(jpe?g|png|gif)$/i,
					exclude: /node_modules/,
					use: [
						{
							loader: 'file-loader',
							options: {
								publicPath: '/images',
								outputPath: './images/',
								name: '[name].[ext]',
								esModule: false
							}
						}
					],
					type: 'javascript/auto'
				},
				{
					test: /fonts.*\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					exclude: /node_modules/,
					type: 'asset/resource',
					generator: {
						filename: "fonts/[name].[ext]",
					}
				}

			]
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		},
		devServer: {
			static: {
				directory: path.join(__dirname, "public/"),
			},
			port: 3000,
			devMiddleware: {
				publicPath: "https://localhost:3000/dist/",
			},
			hot: "only",
			historyApiFallback: true
		},
	}
}


