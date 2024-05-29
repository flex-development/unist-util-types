/**
 * @file Type Tests - Line
 * @module unist-util-types/tests/unit-d/Line
 */

import type TestSubject from '../line'

describe('unit-d:Line', () => {
  it('should equal number', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<number>()
  })
})
