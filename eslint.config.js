import common from 'eslint-config-mahir/common';
import module from 'eslint-config-mahir/module';
import node from 'eslint-config-mahir/node';
import tsdoc from 'eslint-config-mahir/tsdoc';
import typescript from 'eslint-config-mahir/typescript';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
export default [
	...common,
	...node,
	...typescript,
	...module,
	...tsdoc,
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.js', '*.ts'],
				},
			},
		},
	},
	{
		ignores: ['.github', 'node_modules', 'dist'],
	},
];
