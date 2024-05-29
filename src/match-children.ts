/**
 * @file MatchChildren
 * @module unist-util-types/MatchChildren
 */

import type { Node } from 'unist'
import type Children from './children'
import type Match from './match'
import type Test from './test'

/**
 * Extract [*children*][1] from node `N` if it passes a test.
 *
 * [1]: https://github.com/syntax-tree/unist#child
 *
 * @see {@linkcode Children}
 * @see {@linkcode Match}
 * @see {@linkcode Node}
 * @see {@linkcode Test}
 *
 * @template {Node} N - Node to check
 * @template {Test} [Check=Test] - Node test
 */
type MatchChildren<
  N extends Node,
  Check extends Test = Test
> = Children<Match<N, Check>>

export type { MatchChildren as default }
