/**
 * @file IsParent
 * @module unist-util-types/IsParent
 */

import type { Node, Parent } from 'unist'

/**
 * Check if [`Tree`][1] is the [*parent*][2] of [`Child`][3].
 *
 * [1]: https://github.com/syntax-tree/unist#tree
 * [2]: https://github.com/syntax-tree/unist#parent
 * [3]: https://github.com/syntax-tree/unist#child
 *
 * @see {@linkcode Node}
 *
 * @example
 *  type X = IsParent<docast.Description, mdast.Text> // docast.Description
 * @example
 *  type X = IsParent<mdast.Heading, mdast.Blockquote> // never
 *
 * @template {Node} Tree - Tree to check
 * @template {Node} Child - Expected child node
 */
// dprint-ignore
type IsParent<Tree extends Node, Child extends Node> = Tree extends Parent
  ? Tree extends { children: (infer N)[] }
    ? Child extends N
      ? Tree
      : never
    : never
  : never

export type { IsParent as default }
