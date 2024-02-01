module.exports = {
	extends: [
		'plugin:tailwindcss/recommended',
		'plugin:astro/jsx-a11y-recommended',
		'plugin:astro/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 2023,
	},
	overrides: [
		{
			files: ['*.astro'],
			plugins: ['astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
	],
	settings: {
		tailwindcss: {
			callees: ['cn'],
			config: 'tailwind.config.ts',
		},
	},
	rules: {
		'no-unused-vars': 'off',
		'no-console': ['error', { allow: ['error'] }],
		'no-debugger': 'error',
		'prettier/prettier': ['error'],
	},
}
