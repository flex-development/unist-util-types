/**
 * @file Value
 * @module unist-util-types/Value
 */

import type { Literal, Node } from 'unist'

/**
 * Extract the value of [*tree*][1] `T`.
 *
 * [1]: https://github.com/syntax-tree/unist#tree
 *
 * @see {@linkcode Literal}
 * @see {@linkcode Node}
 * @see https://github.com/syntax-tree/unist#literal
 *
 * @template {Node} [T=Literal] - Tree to try extracting value from
 */
type Value<T extends Node = Literal> = T extends Literal ? T['value'] : never

export type { Value as default }
