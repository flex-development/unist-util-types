# unist-util-types

[![github release](https://img.shields.io/github/v/release/flex-development/unist-util-types.svg?include_prereleases&sort=semver)](https://github.com/flex-development/unist-util-types/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/unist-util-types.svg)](https://npmjs.com/package/@flex-development/unist-util-types)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/unist-util-types.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[unist][unist] utility types

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`Ancestor<Tree, Child>`](#ancestortree-child)
  - [`Children<T>`](#childrent)
  - [`Column`](#column)
  - [`Decrement<[I]>`](#decrementi)
  - [`InclusiveDescendant<Tree[, Max][, Depth]>`](#inclusivedescendanttree-max-depth)
  - [`Increment<[I]>`](#incrementi)
  - [`Index`](#index)
  - [`IsAncestor<Tree, Child[, Max][, Depth]>`](#isancestortree-child-max-depth)
  - [`IsParent<Tree, Child>`](#isparenttree-child)
  - [`Line`](#line)
  - [`Match<N, Check>`](#matchn-check)
  - [`MatchChildren<N[, Check]>`](#matchchildrenn-check)
  - [`MatchInclusiveDescendant<Tree, Check[, Max]>`](#matchinclusivedescendanttree-check-max)
  - [`MatchProperties<N[, Check]>`](#matchpropertiesn-check)
  - [`MatchValue<N[, Check]>`](#matchvaluen-check)
  - [`Offset`](#offset)
  - [`Parents<Tree[, Child]>`](#parentstree-child)
  - [`PositionalInfo<[T]>`](#positionalinfot)
  - [`Test`](#test)
  - [`TestFunction<[T][, P][, U]>`](#testfunctiont-p-u)
    - [`fn(node[, index][, parent])`](#fnnode-index-parent)
  - [`Type<[T]>`](#typet)
  - [`Uint`](#uint)
  - [`Value<[T]>`](#valuet)
- [Contribute](#contribute)

## What is this?

This package contains [TypeScript][typescript] definitions for working with [unist][unist] and its [ecosystem of
utilities][unist-utilities].

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][yarn]:

```sh
yarn add @flex-development/unist-util-types
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

## Use

```ts
import type {
  Ancestor,
  Children,
  Column,
  InclusiveDescendant,
  Index,
  Line,
  Match,
  MatchChildren,
  MatchInclusiveDescendant,
  MatchProperties,
  MatchValue,
  Offset,
  Parents,
  PositionalInfo,
  Test,
  TestFunction,
  Type,
  Value
} from '@flex-development/unist-util-types'
```

## API

### `Ancestor<Tree, Child>`

Collect nodes in [`Tree`][tree] that can be [*ancestors*][ancestor] of [`Child`][child].

- `Tree` ([**`Node`**][node]): [*tree*][tree] to collect ancestors from
- `Child` ([**`Node`**][node]): expected [*child*][child] node

> **source**: [`src/ancestor.ts`](src/ancestor.ts)

### `Children<T>`

Extract [*children*][child] from [*tree*][tree] `T`.

- `T` ([**`Node`**][node]): tree to extract children from

> **source**: [`src/children.ts`](src/children.ts)

### `Column`

Column in a source [*file*][file] (`1`-indexed integer).

> **source**: [`src/column.ts`](src/column.ts)

### `Decrement<[I]>`

Subtract `1` from `I` while `I` is in the range `[1, 10]`.

- `I` ([**`Uint`**](#uint)): number to subtract from
  - **default**: `10`

> **source**: [`src/decrement.ts`](src/decrement.ts)

### `InclusiveDescendant<Tree[, Max][, Depth]>`

Collect all [*inclusive descendants*][descendant] of [`Tree`][tree].

- `Tree` ([**`Node`**][node]): [*tree*][tree] to collect descendants from
- `Max` ([**`Uint`**](#uint)): maximum search depth
  - **default**: `10`
- `Depth` ([**`Uint`**](#uint)): current search depth
  - **default**: `0`

> **source**: [`src/descendant-inclusive.ts`](src/descendant-inclusive.ts)

### `Increment<[I]>`

Add `1` to `I` while `I` is in the range `[0, 9]`.

- `I` ([**`Uint`**](#uint)): number to add to
  - **default**: `0`

> **source**: [`src/increment.ts`](src/increment.ts)

### `Index`

Number of preceding [*siblings*][siblings] of a [*child*][child] node.

> **source**: [`src/index-number.ts`](src/index-number.ts)

### `IsAncestor<Tree, Child[, Max][, Depth]>`

Check if [`Tree`][tree] is an [*ancestor*][ancestor] of [`Child`][child].

- `Tree` ([**`Node`**][node]): [*tree*][tree] to check
- `Child` ([**`Node`**][node]): expected [*child*][child] node
- `Max` ([**`Uint`**](#uint)): maximum search depth
  - **default**: `10`
- `Depth` ([**`Uint`**](#uint)): current search depth
  - **default**: `0`

> **source**: [`src/is-ancestor.ts`](src/is-ancestor.ts)

### `IsParent<Tree, Child>`

Check if [`Tree`][tree] is the [*parent*][parent] of [`Child`][child].

- `Tree` ([**`Node`**][node]): [*tree*][tree] to check
- `Child` ([**`Node`**][node]): expected [*child*][child] node

> **source**: [`src/is-parent.ts`](src/is-parent.ts)

### `Line`

Line in a source [*file*][file] (`1`-indexed integer).

> **source**: [`src/line.ts`](src/line.ts)

### `Match<N, Check>`

Check if node `N` passes a [test](#test).

- `N` ([**`Node`**][node]): node to check
- `Check` ([**`Test`**](#test)): node test

> **source**: [`src/match.ts`](src/match.ts)

### `MatchChildren<N[, Check]>`

Extract [*children*][child] from node `N` if it passes a [test](#test).

- `N` ([**`Node`**][node]): node to check
- `Check` ([**`Test`**](#test)): node test
  - **default**: [`Test`](#test)

> **source**: [`src/match-children.ts`](src/match-children.ts)

### `MatchInclusiveDescendant<Tree, Check[, Max]>`

Check if [*inclusive descendants*][descendant] of [`Tree`][tree] pass a test.

- `Tree` ([**`Node`**][node]): [*tree*][tree] to check
- `Check` ([**`Test`**](#test)): node test
- `Max` ([**`Uint`**](#uint)): maximum search depth
  - **default**: `10`

> **source**: [`src/src/match-descendant-inclusive.ts`](src/src/match-descendant-inclusive.ts)

### `MatchProperties<N[, Check]>`

Extract properties of node `N` if it passes a [test](#test).

Properties of `N` are all fields except `type`.

- `N` ([**`Node`**][node]): node to check
- `Check` ([**`Test`**](#test)): node test
  - **default**: [`Test`](#test)

> **source**: [`src/match-properties.ts`](src/match-properties.ts)

### `MatchValue<N[, Check]>`

Extract the [`value`][literal] of node `N` if it passes a [test](#test).

- `N` ([**`Node`**][node]): node to check
- `Check` ([**`Test`**](#test)): node test
  - **default**: [`Test`](#test)

> **source**: [`src/match-value.ts`](src/match-value.ts)

### `Offset`

Index of a character in a source [*file*][file] (`0`-indexed integer).

> **source**: [`src/offset.ts`](src/offset.ts)

### `Parents<Tree[, Child]>`

Collect nodes in [`Tree`][tree] that can be [*parents*][parent] of [`Child`][child].

All parents will be included in the resulting union if `Child` is `any`.

- `Tree` ([**`Node`**][node]): [*tree*][tree] to collect parents from
- `Child` ([**`Node`**][node]): expected [*child*][child] node
  - **default**: `any`

> **source**: [`src/parents.ts`](src/parents.ts)

### `PositionalInfo<[T]>`

Object containing the [*positional information*][positional-information] of [*tree*][tree] `T`.

- `T` ([**`Node`**][node]): tree to get positional information from
  - **default**: [`Node`][node]

> **source**: [`src/positional-info.ts`](src/positional-info.ts)

### `Test`

Union of test types for a [`Node`][node].

See [`unist-util-is`][unist-util-is] for more details.

> **source**: [`src/test.ts`](src/test.ts)

### `TestFunction<[T][, P][, U]>`

Check if a node passes a test.

- `T` ([**`Node`**][node]): node to check
  - **default**: [`Node`][node]
- `P` ([**`Parent`**][parent]): [*parent(s)*][parent] of node `T`
  - **default**: [`Parent`][parent]
- `U` (**`any`**): `this` context
  - **default**: `unknown`

#### `fn(node[, index][, parent])`

**Parameters**:

- `node` (**`T`**): node to check
- `index` (**[`Index`](#index) | `undefined`**): index of `node` in `parent.children`
- `parent` (**[`Parent`][parent] | `undefined`**): [*parent*][parent] of `node`

**Returns**:

`boolean | undefined | void` test result for `node`

> **source**: [`src/test-function.ts`](src/test-function.ts)

### `Type<[T]>`

Extract [*type*][type] from [*tree*][tree] `T`.

- `T` ([**`Node`**][node]): tree to extract type from
  - **default**: [`Node`][node]

> **source**: [`src/type.ts`](src/type.ts)

### `Uint`

Number used for iteration.

Range: `[0, 10]`

> **source**: [`src/uint.ts`](src/uint.ts)

### `Value<[T]>`

Extract the `value` of [*tree*][tree] `T`.

- `T` ([**`Node`**][node]): tree to extract value from
  - **default**: [`Literal`][literal]

> **source**: [`src/value.ts`](src/value.ts)

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[ancestor]: https://github.com/syntax-tree/unist#ancestor
[child]: https://github.com/syntax-tree/unist#child
[descendant]: https://github.com/syntax-tree/unist#descendant
[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[file]: https://github.com/syntax-tree/unist#file
[literal]: https://github.com/syntax-tree/unist#literal
[node]: https://github.com/syntax-tree/unist#node
[parent]: https://github.com/syntax-tree/unist#parent
[positional-information]: https://github.com/syntax-tree/unist#positional-information
[siblings]: https://github.com/syntax-tree/unist#sibling
[tree]: https://github.com/syntax-tree/unist#tree
[type]: https://github.com/syntax-tree/unist#type
[typescript]: https://www.typescriptlang.org
[unist-util-is]: https://github.com/syntax-tree/unist-util-is
[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[unist]: https://github.com/syntax-tree/unist
[yarn]: https://yarnpkg.com
