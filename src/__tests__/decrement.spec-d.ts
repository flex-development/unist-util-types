/**
 * @file Type Tests - Decrement
 * @module unist-util-types/tests/unit-d/Decrement
 */

import type TestSubject from '../decrement'

describe('unit-d:Decrement', () => {
  type Min = 0

  describe('N === 0', () => {
    it('should equal 0', () => {
      expectTypeOf<TestSubject<Min>>().toEqualTypeOf<Min>()
    })
  })

  describe('N === 1', () => {
    it('should equal 0', () => {
      expectTypeOf<TestSubject<1>>().toEqualTypeOf<Min>()
    })
  })

  describe('N === 2', () => {
    it('should equal 1', () => {
      expectTypeOf<TestSubject<2>>().toEqualTypeOf<1>()
    })
  })

  describe('N === 3', () => {
    it('should equal 2', () => {
      expectTypeOf<TestSubject<3>>().toEqualTypeOf<2>()
    })
  })

  describe('N === 4', () => {
    it('should equal 3', () => {
      expectTypeOf<TestSubject<4>>().toEqualTypeOf<3>()
    })
  })

  describe('N === 5', () => {
    it('should equal 4', () => {
      expectTypeOf<TestSubject<5>>().toEqualTypeOf<4>()
    })
  })

  describe('N === 6', () => {
    it('should equal 5', () => {
      expectTypeOf<TestSubject<6>>().toEqualTypeOf<5>()
    })
  })

  describe('N === 7', () => {
    it('should equal 6', () => {
      expectTypeOf<TestSubject<7>>().toEqualTypeOf<6>()
    })
  })

  describe('N === 8', () => {
    it('should equal 7', () => {
      expectTypeOf<TestSubject<8>>().toEqualTypeOf<7>()
    })
  })

  describe('N === 9', () => {
    it('should equal 8', () => {
      expectTypeOf<TestSubject<9>>().toEqualTypeOf<8>()
    })
  })

  describe('N === 10', () => {
    it('should equal 9', () => {
      expectTypeOf<TestSubject>().toEqualTypeOf<9>()
    })
  })
})
