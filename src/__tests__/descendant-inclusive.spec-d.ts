/**
 * @file Type Tests - InclusiveDescendant
 * @module unist-util-types/tests/unit-d/InclusiveDescendant
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type TestSubject from '../descendant-inclusive'

describe('unit-d:InclusiveDescendant', () => {
  it('should equal Tree if Tree does not extend Parent', () => {
    // Arrange
    type Tree = docast.InlineTag

    // Expect
    expectTypeOf<TestSubject<Tree>>().toEqualTypeOf<Tree>()
  })

  describe('Tree extends Parent', () => {
    type Tree = docast.Comment

    it('should equal Tree if Depth extends Max', () => {
      // Arrange
      type Depth = 10

      // Expect
      expectTypeOf<TestSubject<Tree, Depth, Depth>>().toEqualTypeOf<Tree>()
    })

    it('should unionize Tree and all descendents', () => {
      // Arrange
      type Expect =
        | docast.BlockTag
        | docast.BlockTagContent
        | docast.Description
        | docast.DescriptionContent
        | mdast.Heading
        | Tree

      // Expect
      expectTypeOf<TestSubject<Tree>>().toEqualTypeOf<Expect>()
    })
  })
})
