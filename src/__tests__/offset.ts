/**
 * @file Type Tests - Offset
 * @module unist-util-types/tests/unit-d/Offset
 */

import type TestSubject from '../offset'

describe('unit-d:Offset', () => {
  it('should equal number', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<number>()
  })
})
