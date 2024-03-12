/**
 * @file PositionalInfo
 * @module unist-util-types/PositionalInfo
 */

import type { Node } from 'unist'

/**
 * Object containing the [*positional information*][1] of [node][2] `T`.
 *
 * [1]: https://github.com/syntax-tree/unist#positional-information
 * [2]: https://github.com/syntax-tree/unist#node
 *
 * @see {@linkcode Node}
 *
 * @template {Node} [T=Node] - Node to get positional information from
 */
type PositionalInfo<T extends Node = Node> = Pick<T, 'position'>

export type { PositionalInfo as default }
