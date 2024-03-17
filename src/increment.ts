/**
 * @file Increment
 * @module unist-util-types/Increment
 */

import type Uint from './uint'

/**
 * Add `1` to `I` while `I` is in the range `[0, 9]`.
 *
 * @see {@linkcode Increment}
 *
 * @example
 *  type X = Increment // 1
 * @example
 *  type X = Increment<2> // 3
 * @example
 *  type X = Increment<9> // 10
 * @example
 *  type X = Decrement<10> // 10
 *
 * @template {Uint} [I=0] - Current number
 */
// dprint-ignore
type Increment<I extends Uint = 0> = I extends 0
  ? 1
  : I extends 1
    ? 2
    : I extends 2
      ? 3
      : I extends 3
        ? 4
        : I extends 4
          ? 5
          : I extends 5
            ? 6
            : I extends 6
              ? 7
              : I extends 7
                ? 8
                : I extends 8
                  ? 9
                  : 10

export type { Increment as default }
