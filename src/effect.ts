import { Data, Effect } from 'effect';

export class EmptyNameError extends Data.TaggedError('EmptyNameError') {}

/**
 * Greets someone by name.
 *
 * Fails with {@link EmptyNameError} when the name is blank
 */
export const greet = Effect.fn('greet')(function* (name: string) {
	const trimmed = name.trim();
	if (trimmed === '') return yield* new EmptyNameError();
	return `Hello, ${trimmed}!`;
});
