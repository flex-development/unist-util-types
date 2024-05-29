/**
 * @file MatchProperties
 * @module unist-util-types/MatchProperties
 */

import type { Node } from 'unist'
import type Match from './match'
import type Test from './test'

/**
 * Extract properties of node `N` if it passes a test.
 *
 * > 👉 Properties of `N` are all fields except `type`.
 *
 * @see {@linkcode Match}
 * @see {@linkcode Node}
 * @see {@linkcode Test}
 *
 * @template {Node} N - Node to check
 * @template {Test} [Check=Test] - Node test
 */
// dprint-ignore
type MatchProperties<
  N extends Node,
  Check extends Test = Test
> = Match<N, Check> extends infer U
  ? U extends Node
    ? { [H in keyof U as Extract<keyof Omit<U, 'type'>, H>]: U[H] }
    : never
  : never

export type { MatchProperties as default }
