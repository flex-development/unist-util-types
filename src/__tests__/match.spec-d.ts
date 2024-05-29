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
  enum types {
    blockTag = 'blockTag',
    blockquote = 'blockquote',
    break = 'break',
    code = 'code',
    comment = 'comment',
    containerDirective = 'containerDirective',
    definition = 'definition',
    delete = 'delete',
    description = 'description',
    emphasis = 'emphasis',
    footnoteDefinition = 'footnoteDefinition',
    footnoteReference = 'footnoteReference',
    heading = 'heading',
    html = 'html',
    image = 'image',
    imageReference = 'imageReference',
    inlineCode = 'inlineCode',
    inlineTag = 'inlineTag',
    leafDirective = 'leafDirective',
    link = 'link',
    linkReference = 'linkReference',
    list = 'list',
    listItem = 'listItem',
    paragraph = 'paragraph',
    root = 'root',
    strong = 'strong',
    table = 'table',
    tableCell = 'tableCell',
    tableRow = 'tableRow',
    text = 'text',
    textDirective = 'textDirective',
    thematicBreak = 'thematicBreak',
    typeExpression = 'typeExpression'
  }

  describe('Check extends (...args: any[]) => any', () => {
    type N = docast.Description | docast.DescriptionContent

    it('should equal N if Check is not type guard', () => {
      expectTypeOf<TestSubject<N, TestFunction>>().toEqualTypeOf<N>()
    })

    describe('Check extends (value: any) => value is infer U', () => {
      it('should extract constituents of N that match U', () => {
        // Arrange
        type T = (v: unknown) => v is docast.BlockTag | docast.InlineTag

        // Expect
        expectTypeOf<TestSubject<N, T>>().toEqualTypeOf<docast.InlineTag>()
      })
    })
  })

  describe('Check extends (Node | TestFunction | Type)[]', () => {
    type N = InclusiveDescendant<docast.Root>

    it('should extract all matching constituents of N', () => {
      // Arrange
      type T = (
        | docast.BlockTag
        | Type<mdast.Code>
        | types.typeExpression
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

  describe('Check extends Node', () => {
    it('should extract constituents of N that extend Check', () => {
      // Arrange
      type T = mdast.Break | mdast.Text

      // Expect
      expectTypeOf<TestSubject<mdast.Nodes, T>>().toEqualTypeOf<T>()
    })
  })

  describe('Check extends Type', () => {
    it('should extract constituents of N that extend { type: Check }', () => {
      // Arrange
      type T = 'code' | 'inlineCode'
      type Expect = mdast.Code | mdast.InlineCode

      // Expect
      expectTypeOf<TestSubject<mdast.Nodes, T>>().toEqualTypeOf<Expect>()
    })

    it('should extract constituents of N where Check extends Type<N>', () => {
      // Arrange
      type T = types.code | types.inlineCode
      type Expect = mdast.Code | mdast.InlineCode

      // Expect
      expectTypeOf<TestSubject<mdast.Nodes, T>>().toEqualTypeOf<Expect>()
    })
  })

  describe('Check extends null', () => {
    it('should equal N', () => {
      // Arrange
      type N = docast.DocastNode

      // Expect
      expectTypeOf<TestSubject<N, null>>().toEqualTypeOf<N>()
    })
  })

  describe('Check extends undefined', () => {
    it('should equal N', () => {
      // Arrange
      type N = mdast.Nodes

      // Expect
      expectTypeOf<TestSubject<N, undefined>>().toEqualTypeOf<N>()
    })
  })
})
