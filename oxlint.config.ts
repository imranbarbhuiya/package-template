import common from '@imranbarbhuiya/oxc-config/common';
import effect from '@imranbarbhuiya/oxc-config/effect';
import module from '@imranbarbhuiya/oxc-config/module';
import node from '@imranbarbhuiya/oxc-config/node';
import tsdoc from '@imranbarbhuiya/oxc-config/tsdoc';
import typescript from '@imranbarbhuiya/oxc-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
	extends: [common, node, typescript, module, tsdoc, effect],
	ignorePatterns: ['.github/**', 'dist/**', 'docs/**', 'coverage/**'],
	options: {
		typeAware: true,
	},
	rules: {
		'mahir-effect/no-run-outside-edge': [2, { allow: ['src/index.ts', '**/*.test.ts', '**/scripts/**'] }],
	},
});
