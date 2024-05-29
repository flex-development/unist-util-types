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
 * @template {Test} [Check=Test] - Node test
 */
type MatchOne<N extends Node, Check extends Test> = // dprint-ignore
  Check extends null | undefined
    ? N
    : N extends { type: Check }
      ? N
      : N extends Check
        ? N
        : Check extends Type<N>
          ? N
          : Check extends (...args: any[]) => any
            ? Check extends (value: any) => value is infer U
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
 * @template {Test} [Check=Test] - Node test
 */
type Match<N extends Node, Check extends Test> = Check extends any[]
  ? MatchOne<N, Check[number]>
  : MatchOne<N, Check>

export type { Match as default }
