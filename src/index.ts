import { Effect } from 'effect';

import * as Greeter from './effect.ts';

export { EmptyNameError } from './effect.ts';

/**
 * Greets someone by name.
 *
 * @param name - The name to greet
 * @returns The greeting, or rejects with {@link EmptyNameError} when the name is blank
 */
export const greet = (name: string): Promise<string> => Effect.runPromise(Greeter.greet(name));
