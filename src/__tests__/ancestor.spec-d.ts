/**
 * @file Type Tests - Ancestor
 * @module unist-util-types/tests/unit-d/Ancestor
 */

import type * as docast from '@flex-development/docast'
import type * as mdast from 'mdast'
import type TestSubject from '../ancestor'

describe('unit-d:Ancestor', () => {
  it('should unionize all ancestors of Child', () => {
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
    expectTypeOf<TestSubject<docast.Root, mdast.Text>>().toEqualTypeOf<Expect>()
  })
})
