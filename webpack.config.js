module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: '@sucrase/webpack-loader',
					options: {
						transforms: ['jsx'],
						
					}
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			}
		]
	}
};
