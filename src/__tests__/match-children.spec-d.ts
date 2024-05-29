/**
 * @file Type Tests - MatchChildren
 * @module unist-util-types/tests/unit-d/MatchChildren
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type Children from '../children'
import type InclusiveDescendant from '../descendant-inclusive'
import type TestSubject from '../match-children'
import type Type from '../type'

describe('unit-d:MatchChildren', () => {
  it('should equal Children<Match<N, T>>', () => {
    // Arrange
    type N = docast.Root

    // Expect
    expectTypeOf<TestSubject<N>>().toEqualTypeOf<Children<N>>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type N = InclusiveDescendant<docast.Root>
      type T = Type<docast.Comment | mdast.Blockquote | mdast.Text>
      type Expect = Children<docast.Comment | mdast.Blockquote>

      // Expect
      expectTypeOf<TestSubject<N, T>>().toEqualTypeOf<Expect>()
    })
  })
})
