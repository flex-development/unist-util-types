/**
 * @file Type Tests - IsAncestor
 * @module unist-util-types/tests/unit-d/IsAncestor
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type TestSubject from '../is-ancestor'

describe('unit-d:IsAncestor ', () => {
  it('should equal Tree if Tree is ancestor of Child', () => {
    // Arrange
    type Child = docast.InlineTag
    type Tree = mdast.Blockquote

    // Expect
    expectTypeOf<TestSubject<Tree, Child>>().toEqualTypeOf<Tree>()
  })

  it('should equal never is Tree is not ancestor of Child', () => {
    // Arrange
    type Child = mdast.Code
    type Tree = mdast.List

    // Expect
    expectTypeOf<TestSubject<Tree, Child>>().toEqualTypeOf<never>()
  })
})
