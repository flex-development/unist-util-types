/**
 * @file Type Tests - Match
 * @module unist-util-types/tests/unit-d/Match
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type InclusiveDescendant from '../descendant-inclusive'
import type TestSubject from '../match'
import type TestFunction from '../test-function'
import type Type from '../type'

describe('unit-d:Match', () => {
  describe('T extends (...args: any[]) => any', () => {
    type N = docast.Description | docast.DescriptionContent

    it('should equal N if T is not type guard', () => {
      expectTypeOf<TestSubject<N, TestFunction>>().toEqualTypeOf<N>()
    })

    describe('T extends (value: any) => value is infer U', () => {
      it('should extract type constituents of N that match U', () => {
        // Arrange
        type T = (v: unknown) => v is docast.BlockTag | docast.InlineTag

        // Expect
        expectTypeOf<TestSubject<N, T>>().toEqualTypeOf<docast.InlineTag>()
      })
    })
  })

  describe('T extends (Node | TestFunction | Type)[]', () => {
    type N = InclusiveDescendant<docast.Root>

    it('should extract all matching type constituents of N', () => {
      // Arrange
      type T = (
        | docast.BlockTag
        | Type<docast.TypeExpression>
        | Type<mdast.Code>
        | ((v: unknown) => v is mdast.PhrasingContent)
      )[]
      type Expect =
        | docast.BlockTag
        | docast.TypeExpression
        | mdast.Code
        | mdast.PhrasingContent

      expectTypeOf<TestSubject<N, T>>().toEqualTypeOf<Expect>()
    })
  })

  describe('T extends Node', () => {
    it('should extract type constituents of N that extend T', () => {
      // Arrange
      type T = mdast.Break | mdast.Text

      // Expect
      expectTypeOf<TestSubject<mdast.Nodes, T>>().toEqualTypeOf<T>()
    })
  })

  describe('T extends Type', () => {
    it('should extract type constituents of N that extend { type: T }', () => {
      // Arrange
      type T = 'code' | 'inlineCode'
      type Expect = mdast.Code | mdast.InlineCode

      // Expect
      expectTypeOf<TestSubject<mdast.Nodes, T>>().toEqualTypeOf<Expect>()
    })
  })

  describe('T extends null', () => {
    it('should equal N', () => {
      // Arrange
      type N = docast.DocastNode

      // Expect
      expectTypeOf<TestSubject<N, null>>().toEqualTypeOf<N>()
    })
  })

  describe('T extends undefined', () => {
    it('should equal N', () => {
      // Arrange
      type N = mdast.Nodes

      // Expect
      expectTypeOf<TestSubject<N, undefined>>().toEqualTypeOf<N>()
    })
  })
})
