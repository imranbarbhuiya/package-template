import common from 'eslint-config-mahir/common';
import node from 'eslint-config-mahir/node';
import typescript from 'eslint-config-mahir/typescript';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
export default [
	...common,
	...node,
	...typescript,
	{
		rules: {
			'import-x/order': 'off',
		},
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['eslint.config.js', 'tsup.config.ts', 'vitest.config.ts'],
					defaultProject: 'tsconfig.base.json',
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		ignores: ['.github', '.yarn', 'dist'],
	},
];
