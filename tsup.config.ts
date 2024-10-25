import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/index.ts'],
	format: ['esm', 'iife'],
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: 'esnext',
	keepNames: true,
	globalName: 'template',
	tsconfig: 'src/tsconfig.json',
	treeshake: true,
});
