/**
 * @file Decrement
 * @module unist-util-types/Decrement
 */

import type Uint from './uint'

/**
 * Subtract `1` from `I` while `I` is in the range `[1, 10]`.
 *
 * @see {@linkcode Uint}
 *
 * @example
 *  type X = Decrement // 9
 * @example
 *  type X = Decrement<4> // 3
 * @example
 *  type X = Decrement<1> // 0
 * @example
 *  type X = Decrement<0> // 0
 *
 * @template {Uint} [I=10] - Number to subtract from
 */
// dprint-ignore
type Decrement<I extends Uint = 10> = I extends 10
  ? 9
  : I extends 9
    ? 8
    : I extends 8
      ? 7
      : I extends 7
        ? 6
        : I extends 6
          ? 5
          : I extends 5
            ? 4
            : I extends 4
              ? 3
              : I extends 3
                ? 2
                : I extends 2
                  ? 1
                  : 0

export type { Decrement as default }
