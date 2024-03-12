/**
 * @file Decrement
 * @module unist-util-types/Decrement
 */

import type Uint from './uint'

/**
 * Subtract `1` from `N` while `N` is in the range `[1, 10]`.
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
 * @template {Uint} [N=10] - Current number
 */
// dprint-ignore
type Decrement<N extends Uint = 10> = N extends 10
  ? 9
  : N extends 9
    ? 8
    : N extends 8
      ? 7
      : N extends 7
        ? 6
        : N extends 6
          ? 5
          : N extends 5
            ? 4
            : N extends 4
              ? 3
              : N extends 3
                ? 2
                : N extends 2
                  ? 1
                  : 0

export type { Decrement as default }
