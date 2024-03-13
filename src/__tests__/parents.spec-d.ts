/**
 * @file Type Tests - Parents
 * @module unist-util-types/tests/unit-d/Parents
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type TestSubject from '../parents'

describe('unit-d:Parents', () => {
  it('should unionize all parents in Tree if Child is any', () => {
    // Arrange
    type Expect =
      | docast.BlockTag
      | docast.Comment
      | docast.Description
      | docast.Root
      | mdast.Blockquote
      | mdast.Delete
      | mdast.Emphasis
      | mdast.FootnoteDefinition
      | mdast.Heading
      | mdast.Link
      | mdast.LinkReference
      | mdast.List
      | mdast.ListItem
      | mdast.Paragraph
      | mdast.Strong
      | mdast.Table
      | mdast.TableCell
      | mdast.TableRow

    // Expect
    expectTypeOf<TestSubject<docast.Root>>().toEqualTypeOf<Expect>()
  })

  it('should unionize all parents of Child', () => {
    // Arrange
    type Expect =
      | docast.BlockTag
      | docast.Description
      | mdast.Blockquote
      | mdast.FootnoteDefinition
      | mdast.ListItem

    // Expect
    expectTypeOf<TestSubject<docast.Root, mdast.Code>>().toEqualTypeOf<Expect>()
  })
})
