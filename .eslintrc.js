module.exports = {
	env: {
		browser: true,
		es2021: true,
		'jest/globals': true,
		jest: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:jest/recommended'
	],
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
	plugins: ['react', 'prettier', 'jest'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'jest/no-mocks-import': 'off'
	}
};
