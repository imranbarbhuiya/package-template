import { assert, describe, it } from '@effect/vitest';
import { Effect } from 'effect';

import * as Greeter from '../src/effect.ts';
import { EmptyNameError, greet } from '../src/index.ts';

describe('greet', () => {
	it.effect('greets a name', () =>
		Effect.gen(function* () {
			assert.strictEqual(yield* Greeter.greet(' Parbez '), 'Hello, Parbez!');
		}),
	);

	it.effect('fails on a blank name', () =>
		Effect.gen(function* () {
			const error = yield* Effect.flip(Greeter.greet('  '));
			assert.instanceOf(error, EmptyNameError);
		}),
	);

	it('resolves from the Promise API', async () => {
		assert.strictEqual(await greet('Parbez'), 'Hello, Parbez!');
	});

	it('rejects from the Promise API with the same error', async () => {
		const error: unknown = await greet('').catch((error_: unknown) => error_);
		assert.instanceOf(error, EmptyNameError);
	});
});
