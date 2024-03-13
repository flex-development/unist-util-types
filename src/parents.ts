/**
 * @file Parents
 * @module unist-util-types/Parents
 */

import type { Node } from 'unist'
import type InclusiveDescendant from './descendant-inclusive'
import type IsParent from './is-parent'

/**
 * Collect nodes in [`Tree`][1] that can be [*parents*][2] of [`Child`][3].
 *
 * > 👉 **Note**: All parents will be included in the resulting union if `Child`
 * > is `any`.
 *
 * [1]: https://github.com/syntax-tree/unist#tree
 * [2]: https://github.com/syntax-tree/unist#parent
 * [3]: https://github.com/syntax-tree/unist#child
 *
 * @see {@linkcode InclusiveDescendant}
 * @see {@linkcode Node}
 *
 * @template {Node} Tree - Tree to collect parents from
 * @template {Node} [Child=any] - Child to search for
 */
type Parents<
  Tree extends Node,
  Child extends Node = any
> = IsParent<InclusiveDescendant<Tree>, Child>

export type { Parents as default }
