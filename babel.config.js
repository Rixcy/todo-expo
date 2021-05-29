module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		env: {
			development: {
				plugins: [
					[
						'module-resolver',
						{
							root: ['.'],
							alias: {
								tailwind: './tailwind',
								components: './components',
							},
						},
					],
				],
			},
		},
	}
}
