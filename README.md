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
  - [`Decrement<[N]>`](#decrementn)
  - [`InclusiveDescendant<Tree[, Max][, Depth]>`](#inclusivedescendanttree-max-depth)
  - [`Increment<[N]>`](#incrementn)
  - [`IsAncestor<Tree, Child[, Max][, Depth]>`](#isancestortree-child-max-depth)
  - [`IsParent<Tree, Child>`](#isparenttree-child)
  - [`Parents<Tree[, Child]>`](#parentstree-child)
  - [`PositionalInfo<T>`](#positionalinfot)
  - [`Uint`](#uint)
- [Contribute](#contribute)

## What is this?

This package contains [TypeScript][typescript] definitions for working with [unist][unist] and its [ecosystem of
utilities][unist-utilities].

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][yarn]:

```sh
yarn add -D @flex-development/unist-util-types @types/unist
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
  InclusiveDescendant,
  Parents,
  PositionalInfo
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

- `T` ([**`Node`**][node]): [*tree*][tree] to try extracting children from

> **source**: [`src/children.ts`](src/children.ts)

### `Decrement<[N]>`

Subtract `1` from `N` while `N` is in the range `[1, 10]`.

- `N` ([**`Uint`**](#uint)): number to subtract from
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

### `Increment<[N]>`

Add `1` to `N` while `N` is in the range `[0, 9]`.

- `N` ([**`Uint`**](#uint)): number to add to
  - **default**: `0`

> **source**: [`src/increment.ts`](src/increment.ts)

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

### `Parents<Tree[, Child]>`

Collect nodes in [`Tree`][tree] that can be [*parents*][parent] of [`Child`][child].

All parents will be included in the resulting union if `Child` is `any`.

- `Tree` ([**`Node`**][node]): [*tree*][tree] to collect parents from
- `Child` ([**`Node`**][node]): expected [*child*][child] node
  - **default**: `any`

> **source**: [`src/parents.ts`](src/parents.ts)

### `PositionalInfo<[T]>`

Object containing the [*positional information*][positional-information] of [node][node] `T`.

- `T` ([**`Node`**][node]): node to get positional information from
  - **default**: [`Node`][node]

> **source**: [`src/positional-info.ts`](src/positional-info.ts)

### `Uint`

Number used for iteration.

Range: `[0, 10]`

> **source**: [`src/uint.ts`](src/uint.ts)

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[ancestor]: https://github.com/syntax-tree/unist#ancestor
[child]: https://github.com/syntax-tree/unist#child
[descendant]: https://github.com/syntax-tree/unist#descendant
[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[node]: https://github.com/syntax-tree/unist#node
[parent]: https://github.com/syntax-tree/unist#parent
[positional-information]: https://github.com/syntax-tree/unist#positional-information
[tree]: https://github.com/syntax-tree/unist#tree
[typescript]: https://www.typescriptlang.org
[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[unist]: https://github.com/syntax-tree/unist
[yarn]: https://yarnpkg.com
