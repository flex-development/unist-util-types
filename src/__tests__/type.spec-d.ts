/**
 * @file Type Tests - Type
 * @module unist-util-types/tests/unit-d/Type
 */

import type * as docast from '@flex-development/docast'
import type TestSubject from '../type'

describe('unit-d:Type', () => {
  it('should equal T["type"]', () => {
    // Arrange
    type T = docast.Comment

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T['type']>()
  })
})
