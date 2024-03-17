/**
 * @file Type Tests - Test
 * @module unist-util-types/tests/unit-d/Test
 */

import type { Node } from 'unist'
import type TestSubject from '../test'
import type TestFunction from '../test-function'
import type Type from '../type'

describe('unit-d:Test', () => {
  it('should extract (Node | TestFunction | Type)[]', () => {
    expectTypeOf<TestSubject>()
      .extract<(Node | TestFunction | Type)[]>()
      .not.toBeNever()
  })

  it('should extract Node', () => {
    expectTypeOf<TestSubject>().extract<Node>().not.toBeNever()
  })

  it('should extract TestFunction', () => {
    expectTypeOf<TestSubject>().extract<TestFunction>().not.toBeNever()
  })

  it('should extract Type', () => {
    expectTypeOf<TestSubject>().extract<Type>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().not.toBeNever()
  })

  it('should extract undefined', () => {
    expectTypeOf<TestSubject>().extract<undefined>().not.toBeNever()
  })
})
