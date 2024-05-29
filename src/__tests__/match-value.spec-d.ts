/**
 * @file Type Tests - MatchValue
 * @module unist-util-types/tests/unit-d/MatchValue
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type InclusiveDescendant from '../descendant-inclusive'
import type TestSubject from '../match-value'
import type Type from '../type'
import type Value from '../value'

describe('unit-d:MatchValue', () => {
  it('should equal Value<Match<N, T>>', () => {
    // Arrange
    type N = mdast.Text

    // Expect
    expectTypeOf<TestSubject<N>>().toEqualTypeOf<Value<N>>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type N = InclusiveDescendant<docast.Root>
      type T = [Type<docast.BlockTag>, Type<mdast.Code>]

      // Expect
      expectTypeOf<TestSubject<N, T>>().toEqualTypeOf<Value<mdast.Code>>()
    })
  })
})
