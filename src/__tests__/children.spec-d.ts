/**
 * @file Type Tests - Children
 * @module unist-util-types/tests/unit-d/Children
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type TestSubject from '../children'

describe('unit-d:Children', () => {
  it('should equal T["children"] if T extends Parent', () => {
    // Arrange
    type T = docast.Comment

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T['children']>()
  })

  it('should equal never if T does not extend Parent', () => {
    expectTypeOf<TestSubject<mdast.InlineCode>>().toEqualTypeOf<never>()
  })
})
