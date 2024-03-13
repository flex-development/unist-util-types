/**
 * @file IsAncestor
 * @module unist-util-types/IsAncestor
 */

import type { Node } from 'unist'
import type Increment from './increment'
import type IsParent from './is-parent'
import type Uint from './uint'

/**
 * Check if [`Tree`][1] is the [*ancestor*][2] of [`Child`][3].
 *
 * [1]: https://github.com/syntax-tree/unist#tree
 * [2]: https://github.com/syntax-tree/unist#ancestor
 * [3]: https://github.com/syntax-tree/unist#child
 *
 * @see {@linkcode Node}
 * @see {@linkcode Uint}
 *
 * @example
 *  type X = IsAncestor<mdast.Blockquote, docast.InlineTag> // mdast.Blockquote
 * @example
 *  type X = IsAncestor<mdast.List, mdast.Code> // never
 *
 * @template {Node} Tree - Tree to check
 * @template {Node} Child - Child to search for
 * @template {Uint} [Max=10] - Maximum search depth
 * @template {Uint} [Depth=0] - Current search depth
 */
// dprint-ignore
type IsAncestor<
  Tree extends Node,
  Child extends Node,
  Max extends Uint = 10,
  Depth extends Uint = 0,
> = Depth extends Max
  ? never
  :
    | IsAncestor<Tree, IsParent<Tree, Child>, Max, Increment<Depth>>
    | IsParent<Tree, Child>

export type { IsAncestor as default }
