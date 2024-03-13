/**
 * @file Type Tests - IsParent
 * @module unist-util-types/tests/unit-d/IsParent
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type TestSubject from '../is-parent'

describe('unit-d:IsParent ', () => {
  it('should equal Tree if Tree is parent of Child', () => {
    // Arrange
    type Child = mdast.Text
    type Tree = docast.Description

    // Expect
    expectTypeOf<TestSubject<Tree, Child>>().toEqualTypeOf<Tree>()
  })

  it('should equal never is Tree is not parent of Child', () => {
    // Arrange
    type Child = mdast.Blockquote
    type Tree = mdast.Heading

    // Expect
    expectTypeOf<TestSubject<Tree, Child>>().toEqualTypeOf<never>()
  })
})
