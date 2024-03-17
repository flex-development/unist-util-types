/**
 * @file TestFunction
 * @module unist-util-types/TestFunction
 */

import type { Node, Parent } from 'unist'
import type Index from './index-number'

/**
 * Check if `node` passes a test.
 *
 * @see {@linkcode Index}
 * @see {@linkcode Node}
 * @see {@linkcode Parent}
 *
 * @template {Node} [T=Node] - Node to check
 * @template {Parent} [P=Parent] - Parent of node
 * @template {any} [U=unknown] - `this` context
 *
 * @this {U}
 *
 * @param {T} node - Node to check
 * @param {Index?} [index] - Index of `node` in `parent.children`
 * @param {P?} [parent] - Parent of `node`
 * @return {boolean | undefined | void} Test result
 */
type TestFunction<
  T extends Node = Node,
  P extends Parent = Parent,
  U = unknown
> = (
  this: U,
  node: T,
  index?: Index,
  parent?: P
) => boolean | undefined | void

export type { TestFunction as default }
