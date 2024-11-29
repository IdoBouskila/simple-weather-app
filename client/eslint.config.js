import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
      unicorn: eslintPluginUnicorn,
			perfectionist: perfectionist,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
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
        }
      ]
		},
	}
);
