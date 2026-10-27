import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['src/index.ts', 'src/effect.ts'],
	format: 'esm',
	dts: true,
	sourcemap: true,
	target: 'es2024',
	tsconfig: 'tsconfig.json',
	deps: {
		neverBundle: true,
	},
});
