module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'prettier'],
	overrides: [
		{
			files: ['*.test.js'],
			rules: {
				'jest/valid-expect': 0
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off'
	}
};
