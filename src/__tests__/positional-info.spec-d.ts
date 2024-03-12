/**
 * @file Type Tests - PositionalInfo
 * @module unist-util-types/tests/unit-d/PositionalInfo
 */

import type * as mdast from 'mdast'
import type TestSubject from '../positional-info'

describe('unit-d:PositionalInfo', () => {
  it('should equal Pick<T, "position">', () => {
    // Arrange
    type T = mdast.Code

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Pick<T, 'position'>>()
  })
})
