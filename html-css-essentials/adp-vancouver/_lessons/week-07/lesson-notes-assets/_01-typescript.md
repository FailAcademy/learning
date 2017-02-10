# TypeScript (3hrs)

## Discussion: What is TypeScript?

A JS compiler with optional "types".
Maintained by Microsoft, created by the creator of C#.

## Compiler at Work

Open the [TypeScript Playground](https://www.typescriptlang.org/play/). Click on each of the examples under the "select" menu. Have students compare the code before and after to see how TS works.

Copy the "Using Classes" example into the [Babel REPL](https://babeljs.io/repl/) for a comparison. How is Babel different?

Remove the TypeScript code from the "using inheritance" example, and paste it into Babel as well. That is (remove the types, and replace public with `this` references). How are the two different.

## Discussion

Which compiler output do you prefer, and why?


## Discussion: Why TypeScript?

Based on Pre-Work articles.

## Quick start

```shell
npm install -g typescript
```

[Get an editor plugin, if necessary](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).



## Setup with React & Webpack

```shell
npm install -g typescript typings webpack

npm install --save-dev ts-loader source-map-loader
npm link typescript
```

Create a "tsconfig.json".

```json
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "./build",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "filesGlob": [
    "**/*.ts",
    "*/*.tsx",
    "!node_modules/**"
  ],
  "files": [],
  "buildOnSave": true
}
```

Follow [React & Webpack](http://www.typescriptlang.org/docs/handbook/react-&-webpack.html) if you run into trouble. Pay attention to the configuration for your particular editor.


## Types

### Basic Types

In JavaScript, we have simple types called "primitives". These are value that cannot be broken down more.

```ts
let a: bool = true;

let b = 42;
let c = 'hello';
let d = null;
```

-- Write five different types in your project.

## Type Inference

What is [Type Inferences](http://www.typescriptlang.org/docs/handbook/type-inference.html)?

Do we need to provide types in the previous example?

*( no, the types are inferred )*

Should we provide types anyway?

*( probably not, unless you want to )*

-- Erase an unnecessary types you just wrote. Sorry!

## Functions

```ts
function addOne(x) {
  return x + 1;
}
```

We can write types for inputs and outputs.

```ts
function addOne(x: number): number {
  return x + 1;
}
```

-- Specify types for your functions.

## Array

How do we provide types for an Array?

[See array](http://www.typescriptlang.org/docs/handbook/basic-types.html).

Provide types for the following:

```ts
let a: number[] = [1, 2, 3];

let b = ['a', 'b', 'c'] ;
let c = [1, 'a', true];
let d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```

-- Specify types for your arrays.

### Interfaces

How do we provide types for an Object?

```ts
let item = {
  line: 42,
  content: 'Hello'
}
```

Types are inferred as:

```ts
let item: { line: number, content: string } = {
  line: 42,
  content: 'Hello'
}
```

Probably not something you want to type repeatedly. Instead we can use an **interface**.

```ts
interface IItem {
  line: number;
  content: string;
}

let item: IItem = {
  line: 42,
  content: string
}
```

-- Write interfaces for your project.

## More Types

### Optional Types

Some keys may not be necessary.

```ts
interface IPerson {
  // fill in the interface
}

let Mary: IPerson = {
  name: 'Mary',
  age: 24,
  job: 'Web Developer'
}

let UnemployedJoe: IPerson = {
  name: 'Joe',
  age: 36
}
```

For these we use a trailing `?`.

```ts
interface IPerson {
  name: string;
  age: number;
  job?: string;
}
```

### Union Types


```ts
function getPerson(id: number): string {
  if (people[id]) {
    return people[id].name;
  } else {
    return null;
  }
}
```

Some keys may have multiple types. `getName` may be a `string` or `null`.

```ts
function getPerson(id: number): string|null {}
```

This is called a **union type**.

Note: this is often a code smell.

### String Literal Types

Some keys may only be certain values.

```ts
function toggleLight(status) {
  if (status === 'on') {
    return 'off';
  } else if (status === 'off') {
    return 'on';
  }
}
```

For these we can use **string literal types**.

```ts
function toggleLight(status: 'on'|'off'): 'on'|'off' {
  if (status === 'on') {
    return 'off';
  } else if (status === 'off') {
    return 'on';
  }
}
```

We could even write a custom type.

```ts
type lightStatus = 'on' | 'off';

function toggleLight(status: lightStatus): lightStatus {
  if (status === 'on') {
    return 'off';
  } else if (status === 'off') {
    return 'on';
  }
}
```

## Generics

```ts
function makeArrayOfThree(x) {
  return [x, x, x];
}
```

`makeArrayOfThree` could take a number, a string, or any kind of type.

When we know the output should be the same type that was input, we use **generics**.

```ts
function makeArrayOfThree<T>(x: T): T[] {
  return [x, x, x];
}
```

## Namespace

Problem!

```ts
interface IPackage {
  address: string;
  recipient: string;
}

interface IPackage {
  name: string;
  description: string;
  version: string;
}
```

[Namespaces](http://www.typescriptlang.org/docs/handbook/namespaces.html).

```ts
namespace PackageJson {
  export interface IPackage { ... }
}

namespace UPS {
  export interface IPackage { ... }
}

// use the namespace
var delivery: UPS.IPackage = { ... }
```


## Declaration Files

When we import a library, we want to use all of the library types. These are collected in `.d.ts` files.

Take a look at a React declaration file:  [React.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/react/react.d.ts). Note: this is an older version (0.14).

```shell
typings install --global --save dt~react
typings install --global --save dt~react-dom
```

-- Read over a declaration file with a partner. Discuss what you think is going on.

### Adding Types to React

We can now provide types to our React Components.

* extend a class
* props
* state
* class methods

```tsx
// class Hello extends React.Component<props, state>{ ... }

class Hello extends React.Component<{name: string}, {}> {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}
```

### TSX

Note: to use JSX inside of TS, we set our files to ".tsx".
