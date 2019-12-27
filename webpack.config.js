const path = require('path');

module.exports = {
	// コンパイル対象ファイル
	entry: path.resolve(__dirname, 'index.js'),

	// コンパイル後の出力されるファイル
	output: {
		// 出力先ディレクトリ
		path: path.resolve(__dirname, './dist/'),

		// 出力ファイル名
		filename: 'bundle.js'
	},

	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: [ '.svelte' ],
		mainFields: [ 'svelte', 'browser', 'module', 'main' ]
	},

	module: {
		rules: [
			{
				test: /\.(html|svelte)$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						customElement: true
					}
				}
			}
		]
	}
};
