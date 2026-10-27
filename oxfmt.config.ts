import config from '@imranbarbhuiya/oxc-config/oxfmt';
import { defineConfig } from 'oxfmt';

export default defineConfig({
	...config,
	ignorePatterns: [...config.ignorePatterns, 'dist', 'docs', 'coverage', 'CHANGELOG.md'],
});
