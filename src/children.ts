/**
 * @file Children
 * @module unist-util-types/Children
 */

import type { Node, Parent } from 'unist'

/**
 * Extract [*children*][1] from [*tree*][2] `T`.
 *
 * [1]: https://github.com/syntax-tree/unist#child
 * [2]: https://github.com/syntax-tree/unist#tree
 *
 * @see {@linkcode Node}
 * @see {@linkcode Parent}
 *
 * @example
 *  type X = Children<Parent> // Node[]
 * @example
 *  type X = Children<Node> // never
 * @example
 *  type X = Children<Literal> // never
 *
 * @template {Node} T - Tree to try extracting children from
 */
type Children<T extends Node> = T extends Parent ? T['children'] : never

export type { Children as default }
