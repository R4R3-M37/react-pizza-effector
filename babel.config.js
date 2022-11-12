const plugins = [
	[
		'module-resolver',
		{
			alias: {
				'~': './src'
			}
		}
	]
]

module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', 'atomic-router/babel-preset'],
	plugins
}
