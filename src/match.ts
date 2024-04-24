/**
 * @file Match
 * @module unist-util-types/Match
 */

import type { Node } from 'unist'
import type Test from './test'
import type Type from './type'

/**
 * Check if node `N` passes `Check`.
 *
 * > **Note**: Does not handle checks that are arrays.
 *
 * @internal
 *
 * @see {@linkcode Node}
 * @see {@linkcode Test}
 *
 * @template {Node} [N=Node] - Node to check
 * @template {Test} [T=Test] - Node test
 */
type MatchOne<N extends Node, T extends Test> = // dprint-ignore
  T extends null | undefined
    ? N
    : N extends { type: T }
      ? N
      : N extends T
        ? N
        : T extends Type<N>
          ? N
          : T extends (...args: any[]) => any
            ? T extends (value: any) => value is infer U
              ? U extends N
                ? U
                : never
              : N
            : never

/**
 * Check if node `N` passes a test.
 *
 * @see {@linkcode Node}
 * @see {@linkcode Test}
 *
 * @example
 *  type X = Match<docast.DocastNode, [docast.InlineTag, 'blockTag']>
 *  // docast.BlockTag | docast.InlineTag
 * @example
 *  type X = Match<mdast.Nodes, mdast.Break>
 *  // mdast.Break
 * @example
 *  type X = Match<docast.DocastNode, (v: unknown) => v is docast.Comment>
 *  // docast.Comment
 * @example
 *  type X = Match<mdast.Nodes, 'code'>
 *  // mdast.Code
 * @example
 *  type X = Match<docast.DocastNode, null>
 *  // docast.DocastNode
 * @example
 *  type X = Match<mdast.Nodes, undefined>
 *  // mdast.Nodes
 *
 * @template {Node} [N=Node] - Node to check
 * @template {Test} [T=Test] - Node test
 */
type Match<N extends Node, T extends Test> = T extends any[]
  ? MatchOne<N, T[number]>
  : MatchOne<N, T>

export type { Match as default }
