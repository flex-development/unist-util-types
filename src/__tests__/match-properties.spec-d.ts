/**
 * @file Type Tests - MatchProperties
 * @module unist-util-types/tests/unit-d/MatchProperties
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type * as unist from 'unist'
import type InclusiveDescendant from '../descendant-inclusive'
import type TestSubject from '../match-properties'

describe('unit-d:MatchProperties', () => {
  it('should equal Omit<Match<N, T>, "type">', () => {
    // Arrange
    type N = docast.Comment

    // Expect
    expectTypeOf<TestSubject<N>>().toEqualTypeOf<Omit<N, 'type'>>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type N = InclusiveDescendant<docast.Root>
      type T = (node: unist.Node) => node is mdast.Code | mdast.InlineCode
      type Expect = Omit<mdast.Code, 'type'> | Omit<mdast.InlineCode, 'type'>

      // Expect
      expectTypeOf<TestSubject<N, T>>().toEqualTypeOf<Expect>()
    })
  })
})
