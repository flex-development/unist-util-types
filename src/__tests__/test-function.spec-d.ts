/**
 * @file Type Tests - TestFunction
 * @module unist-util-types/tests/unit-d/TestFunction
 */

import type * as docast from '@flex-development/docast'
import type Index from '../index-number'
import type Parents from '../parents'
import type TestSubject from '../test-function'

describe('unit-d:TestFunction', () => {
  type T = docast.InlineTag
  type P = Parents<docast.Root, T>
  type U = { trash: WeakSet<docast.DocastNode> }
  type Subject = TestSubject<T, P, U>

  it('should be callable with [T, Index?, P?]', () => {
    expectTypeOf<Subject>().parameters.toEqualTypeOf<[T, Index?, P?]>()
  })

  it('should match [this: U]', () => {
    expectTypeOf<Subject>().thisParameter.toEqualTypeOf<U>()
  })

  it('should return boolean | undefined | void', () => {
    expectTypeOf<Subject>().returns.toEqualTypeOf<boolean | undefined | void>()
  })
})
