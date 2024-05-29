/**
 * @file Type Tests - Value
 * @module unist-util-types/tests/unit-d/Value
 */

import type * as mdast from 'mdast'
import type TestSubject from '../value'

describe('unit-d:Value', () => {
  it('should equal T["value"]', () => {
    // Arrange
    type T = mdast.Text

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T['value']>()
  })
})
