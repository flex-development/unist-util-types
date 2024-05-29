/**
 * @file MatchValue
 * @module unist-util-types/MatchValue
 */

import type { Node } from 'unist'
import type Match from './match'
import type Test from './test'
import type Value from './value'

/**
 * Extract the [`value`][1] of node `N` if it passes a test.
 *
 * [1]: https://github.com/syntax-tree/unist#literal
 *
 * @see {@linkcode Match}
 * @see {@linkcode Node}
 * @see {@linkcode Test}
 * @see {@linkcode Value}
 *
 * @template {Node} N - Node to check
 * @template {Test} [Check=Test] - Node test
 */
type MatchValue<
  N extends Node,
  Check extends Test = Test
> = Value<Match<N, Check>>

export type { MatchValue as default }
