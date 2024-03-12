/**
 * @file Increment
 * @module unist-util-types/Increment
 */

import type Uint from './uint'

/**
 * Add `1` to `N` while `N` is in the range `[0, 9]`.
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
 * @template {Uint} [N=0] - Current number
 */
// dprint-ignore
type Increment<N extends Uint = 0> = N extends 0
  ? 1
  : N extends 1
    ? 2
    : N extends 2
      ? 3
      : N extends 3
        ? 4
        : N extends 4
          ? 5
          : N extends 5
            ? 6
            : N extends 6
              ? 7
              : N extends 7
                ? 8
                : N extends 8
                  ? 9
                  : 10

export type { Increment as default }
