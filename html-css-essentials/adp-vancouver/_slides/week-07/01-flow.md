---
layout: slidedeck
title: Flow Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Types

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false
class: center, middle

# Why Types?

---

# Type Options in JS

- TypeScript
  - from Microsoft
  - adds optional types
  - compiler (like Babel)
  - must rename files '.ts' or '.tsx'
- Flow
  - from Facebook
  - optional types

---

# Flow

- incrementally add files
- quicker setup
- smaller learning curve than TS
- similar syntax to TS

---

# Flow Setup

---

# Install Flow

```js
npm install -g flow
```

---

# Run Flow

Test if flow is installed and working.

/ package.json

```json
"scripts": {
  "flow": "flow; test $? -eq 0 -o $? - eq 2"
}
```

---

# Add .flowconfig

Create a file called ".flowconfig" in your root directory.

---

# Install Flow-bin

A helper dependency for Flow in your project. 

```shell
npm install --save-dev flow-bin
```

---

# Target Files

Use a comment at the top of a file with `// @flow`.

This tells flow to "strongly" type check that file.

/src/index.js

```js
// @ flow

import React from 'react'
/* ... */
```

---

# Type Checking

Create a type error to check if flow is working.

/index.js

```js
// @flow

const greeting: number = 'hello world'
// should show an error
```

---

# VSCode Extension

Install the VSCode Extension: Flow Language Support

---

# VSCode Extension Config

1. get the path to your version of flow

```shell
which flow
-> /path/to/your/flow (copy this)
```

2. Code -> Preferences -> Workspace Settings

Add the following, specifying the path to your version of flow

```json
{
  "javascript.validate.enable": false,
  "flow.path": "/path/to/your/flow"
}
```

---

# With Create-React-App

Add the following to your ".flowconfig" file.

```
[ignore]
<PROJECT_ROOT>/node_modules/fbjs/.*

[options]
suppress_type=$FlowIssue
```

---

# Typing Redux

Ensure your actions are all FSA

```js
export type Action = {
  type: string,
  payload: ?Object
}
```

---

# Library Typing Files

---

# Typing Files

Typing files include types for libraries. This ensures that you're following the API.

An example from the [Redux Flow Types](https://github.com/reactjs/redux/blob/master/flow-typed/redux.js)

```js
declare module 'redux' {
  /* S = State, */
  declare type Dispatch<A: { type: $Subtype<string> }> = (action: A) => A;

  declare type MiddlewareAPI<S, A> = {
    dispatch: Dispatch<A>;
    getState(): S;
  };
}
```

---

# Flow-Typed

Flow-Typed is the package manager for flow type definitions.

Install [flow-typed](https://github.com/flowtype/flow-typed)

```shell
npm install -g flow-typed
```

Install the declaration files in your directory.

```shell
flow-typed install
```

---

# Why Library Typings?

Flow can now find typos and invalid API uses.

```js`
import React, {Compnent} from 'react'

class Example extends Compnent {}
```

---

# Why Library Typings

Flow also makes suggestions when you make a mistake.

```shell
 3: import React, { Compnent } from 'react';                                                                      
                     ^^^^^^^^ Named import from module `react`. 
                     This module has no named export called `Compnent`. 
Did you mean `Component`?                                                                                       
```


{% endhighlight %}
