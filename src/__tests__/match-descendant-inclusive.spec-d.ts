/**
 * @file Type Tests - MatchInclusiveDescendant
 * @module unist-util-types/tests/unit-d/MatchInclusiveDescendant
 */

import type * as docast from '@flex-development/docast'
import type InclusiveDescendant from '../descendant-inclusive'
import type Match from '../match'
import type TestSubject from '../match-descendant-inclusive'
import type Type from '../type'

describe('unit-d:MatchInclusiveDescendant', () => {
  it('should equal Match<InclusiveDescendant<Tree, Max>, Check>', () => {
    // Arrange
    type Tree = docast.Root
    type Check = [Type<docast.BlockTag>, Type<docast.InlineTag>]
    type Expect = Match<InclusiveDescendant<Tree>, Check>

    // Expect
    expectTypeOf<TestSubject<Tree, Check>>().toEqualTypeOf<Expect>()
  })
})
