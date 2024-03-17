/**
 * @file Type Tests - Increment
 * @module unist-util-types/tests/unit-d/Increment
 */

import type TestSubject from '../increment'

describe('unit-d:Increment', () => {
  describe('I === 0', () => {
    it('should equal 1', () => {
      expectTypeOf<TestSubject>().toEqualTypeOf<1>()
    })
  })

  describe('I === 1', () => {
    it('should equal 2', () => {
      expectTypeOf<TestSubject<1>>().toEqualTypeOf<2>()
    })
  })

  describe('I === 2', () => {
    it('should equal 3', () => {
      expectTypeOf<TestSubject<2>>().toEqualTypeOf<3>()
    })
  })

  describe('I === 3', () => {
    it('should equal 4', () => {
      expectTypeOf<TestSubject<3>>().toEqualTypeOf<4>()
    })
  })

  describe('I === 4', () => {
    it('should equal 5', () => {
      expectTypeOf<TestSubject<4>>().toEqualTypeOf<5>()
    })
  })

  describe('I === 5', () => {
    it('should equal 6', () => {
      expectTypeOf<TestSubject<5>>().toEqualTypeOf<6>()
    })
  })

  describe('I === 6', () => {
    it('should equal 7', () => {
      expectTypeOf<TestSubject<6>>().toEqualTypeOf<7>()
    })
  })

  describe('I === 7', () => {
    it('should equal 8', () => {
      expectTypeOf<TestSubject<7>>().toEqualTypeOf<8>()
    })
  })

  describe('I === 8', () => {
    it('should equal 9', () => {
      expectTypeOf<TestSubject<8>>().toEqualTypeOf<9>()
    })
  })

  describe('I === 9', () => {
    it('should equal 10', () => {
      expectTypeOf<TestSubject<9>>().toEqualTypeOf<10>()
    })
  })

  describe('I === 10', () => {
    type Max = 10

    it('should equal 10', () => {
      expectTypeOf<TestSubject<Max>>().toEqualTypeOf<Max>()
    })
  })
})
