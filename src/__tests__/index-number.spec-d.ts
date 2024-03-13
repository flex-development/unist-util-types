/**
 * @file Type Tests - Index
 * @module unist-util-types/tests/unit-d/Index
 */

import type TestSubject from '../index-number'

describe('unit-d:Index', () => {
  it('should equal number', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<number>()
  })
})
