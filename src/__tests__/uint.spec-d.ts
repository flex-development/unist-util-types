/**
 * @file Type Tests - Uint
 * @module unist-util-types/tests/unit-d/Uint
 */

import type TestSubject from '../uint'

describe('unit-d:Uint', () => {
  it('should extract 0', () => {
    expectTypeOf<TestSubject>().extract<0>().not.toBeNever()
  })

  it('should extract 1', () => {
    expectTypeOf<TestSubject>().extract<1>().not.toBeNever()
  })

  it('should extract 2', () => {
    expectTypeOf<TestSubject>().extract<2>().not.toBeNever()
  })

  it('should extract 3', () => {
    expectTypeOf<TestSubject>().extract<3>().not.toBeNever()
  })

  it('should extract 4', () => {
    expectTypeOf<TestSubject>().extract<4>().not.toBeNever()
  })

  it('should extract 5', () => {
    expectTypeOf<TestSubject>().extract<5>().not.toBeNever()
  })

  it('should extract 6', () => {
    expectTypeOf<TestSubject>().extract<6>().not.toBeNever()
  })

  it('should extract 7', () => {
    expectTypeOf<TestSubject>().extract<7>().not.toBeNever()
  })

  it('should extract 9', () => {
    expectTypeOf<TestSubject>().extract<9>().not.toBeNever()
  })

  it('should extract 9', () => {
    expectTypeOf<TestSubject>().extract<9>().not.toBeNever()
  })

  it('should extract 10', () => {
    expectTypeOf<TestSubject>().extract<10>().not.toBeNever()
  })
})
