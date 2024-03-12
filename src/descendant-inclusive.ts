/**
 * @file InclusiveDescendant
 * @module unist-util-types/InclusiveDescendant
 */

import type { Node, Parent } from 'unist'
import type Increment from './increment'
import type Uint from './uint'

/**
 * Collect all [*inclusive descendants*][1] of [`Tree`][2].
 *
 * [1]: https://github.com/syntax-tree/unist#descendant
 * [2]: https://github.com/syntax-tree/unist#tree
 *
 * @see {@linkcode Node}
 * @see {@linkcode Uint}
 *
 * @template {Node} Tree - Tree to collect descendants from
 * @template {Uint} Max - Maximum tree depth
 * @template {Uint} Depth - Current tree depth
 */
// dprint-ignore
type InclusiveDescendant<
  Tree extends Node,
  Max extends Uint = 10,
  Depth extends Uint = 0
> = Tree extends Parent
    ? Depth extends Max
      ? Tree
      : | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
        | Tree
    : Tree

export type { InclusiveDescendant as default }
