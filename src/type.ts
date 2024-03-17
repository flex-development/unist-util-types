/**
 * @file Type
 * @module unist-util-types/Type
 */

import type { Node } from 'unist'

/**
 * Extract [*type*][1] from [*tree*][2] `T`.
 *
 * [1]: https://github.com/syntax-tree/unist#type
 * [2]: https://github.com/syntax-tree/unist#tree
 *
 * @see {@linkcode Node}
 *
 * @example
 *  type X = Type // string
 * @example
 *  type X = Type<docast.Comment> // 'comment'
 * @example
 *  type X = Type<mdast.Blockquote> // 'blockquote'
 *
 * @template {Node} T - Tree to extract type from
 */
type Type<T extends Node = Node> = T extends Node ? T['type'] : never

export type { Type as default }
