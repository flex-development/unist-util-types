/**
 * @file MatchInclusiveDescendant
 * @module unist-util-types/MatchInclusiveDescendant
 */

import type { Node } from 'unist'
import type InclusiveDescendant from './descendant-inclusive'
import type Match from './match'
import type Test from './test'
import type Uint from './uint'

/**
 * Check if [*inclusive descendants*][1] of [`Tree`][2] pass a test.
 *
 * [1]: https://github.com/syntax-tree/unist#descendant
 * [2]: https://github.com/syntax-tree/unist#tree
 *
 * @see {@linkcode InclusiveDescendant}
 * @see {@linkcode Node}
 * @see {@linkcode Test}
 * @see {@linkcode Uint}
 *
 * @template {Node} Tree - Tree to check
 * @template {Test} Check - Node test
 * @template {Uint} [Max=10] - Maximum search depth
 */
type MatchInclusiveDescendant<
  Tree extends Node,
  Check extends Test,
  Max extends Uint = 10
> = Match<InclusiveDescendant<Tree, Max>, Check>

export type { MatchInclusiveDescendant as default }
