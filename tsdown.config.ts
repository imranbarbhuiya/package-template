import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/index.ts'],
	format: ['esm', 'iife'],
	minify: false,
	sourcemap: true,
	target: 'esnext',
	globalName: 'template',
	tsconfig: 'src/tsconfig.json',
	treeshake: true,
});
