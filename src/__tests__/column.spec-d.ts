/**
 * @file Type Tests - Column
 * @module unist-util-types/tests/unit-d/Column
 */

import type TestSubject from '../column'

describe('unit-d:Column', () => {
  it('should equal number', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<number>()
  })
})
