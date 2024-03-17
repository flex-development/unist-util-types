/**
 * @file Test
 * @module unist-util-types/Test
 */

import type { Node } from 'unist'
import type TestFunction from './test-function'
import type Type from './type'

/**
 * Union of test types for a {@linkcode Node}.
 *
 * @see {@linkcode TestFunction}
 * @see {@linkcode Type}
 * @see https://github.com/syntax-tree/unist-util-is
 */
type Test =
  | (Node | TestFunction | Type)[]
  | Node
  | TestFunction
  | Type
  | null
  | undefined

export type { Test as default }
