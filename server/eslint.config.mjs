import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			pluginJs.configs.recommended,
			...tseslint.configs.recommended,
		],
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
			perfectionist: perfectionist,
		},
		rules: {
			'perfectionist/sort-imports': [
				'error',
				{
					groups: [],
					order: 'asc',
					type: 'line-length',
					newlinesBetween: 'ignore',
				},
			],
			'perfectionist/sort-named-imports': [
				'error',
				{
					order: 'asc',
					type: 'line-length',
				},
			],
			'unicorn/filename-case': [
				'error',
				{
					case: 'kebabCase',
				},
			],
		},
	}
);
