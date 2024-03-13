/**
 * @file Ancestor
 * @module unist-util-types/Ancestor
 */

import type { Node } from 'unist'
import type InclusiveDescendant from './descendant-inclusive'
import type IsAncestor from './is-ancestor'

/**
 * Collect nodes in [`Tree`][1] that can be [*ancestors*][2] of [`Child`][3].
 *
 * [1]: https://github.com/syntax-tree/unist#tree
 * [2]: https://github.com/syntax-tree/unist#ancestor
 * [3]: https://github.com/syntax-tree/unist#child
 *
 * @see {@linkcode Node}
 *
 * @template {Node} Tree - Tree to collect ancestors from
 * @template {Node} Child - Expected child node
 */
type Ancestor<
  Tree extends Node,
  Child extends Node
> = IsAncestor<InclusiveDescendant<Tree>, Child>

export type { Ancestor as default }
