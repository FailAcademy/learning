---
layout: slidedeck
title: Testing Components Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Testing Components

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false
class: center, middle

# Testing Components

What three things can we test about a component?

Hint (think of what inputs go into a component)

---

# Testing Components

- props
- data
- user inputs

---
template: inverse

# [Jest](https://facebook.github.io/jest/)

---

# Compare Structure

### Ava

```js
import test from 'ava';

test('topic description', t => {
  t.is(true, true);
});
```

### Jest

```js
describe('topic', () => {
  it('description', () => {
    expect(true).toBe(true);
  });
});
```

---

# Compare Assertions

### Ava

```js
t.is(true, true);
t.equal({ a: true }, { a: true} );
```

### Jest

```js
expect(true).toBe(true);
expect({ a: true }).toEqual({ a: true });
```

---

### Jest Differences

- Jest uses globals (**describe**, **it**, **expect**)
- Jest uses chained assertions (`toBe`, `toEqual`)
- Jest has built in code coverage
- Jest has snapshot testing for React
- Jest is considerably faster

---

# Switch to Jest

Uninstall Ava and install Jest.

```shell
npm uninstall ava
npm install --save-dev jest react-test-renderer
```

Take a few minutes to rewrite your tests using Jest.

---
template: inverse

# Snapshot Testing

---

# Testing Components

Setup a test file for your Pokemon component.

/client/components/PokemonList/Pokemon.test.js

```js
import React from 'react';
import renderer from 'react-test-renderer';
import Pokemon from './Pokemon';
```

---

# Outline A Test

/client/components/PokemonList/Pokemon.test.js

```js
describe('Pokemon', () => {
  it('renders a pokemon', () => {
    // What goes here ?
  });
});
```

---

# Mock Component Data

/client/components/PokemonList/Pokemon.test.js

```js
it('renders a pokemon', () => {
    const monster = {
      id: 0,
      name: 'Luvdisc',
      description: 'This heart-shaped Pokemon earned its name by swimming after loving couples it spotted in the ocean’s waves.',
      voters: new Set(['first', 'second']),
      votes: 2,
    };
});
```

---

# Setup a Snapshot Test

Don't worry if you don't understand what is happening yet.
We will look deeper soon.

```js
it('renders a pokemon', () => {
  /* ... */
  const tree = renderer.create(
    <Pokemon
      monster={monster}
      onVote={(x) => x + 1 }
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

# Run Jest

```shell
jest --watch
```

/ package.json

```json
"scripts": {
  "test": "jest --watch"
}
```

---

# Snapshot Testing

### How does snapshot testing work?

Look at the generated file in your "__snapshots__" directory.

### Explain each step to a partner.

1. `const tree = renderer.create()`
2. `.toJSON()`
3. `expect(tree).toMatchSnapshot();`

---

# Common Issues

Write the following test and run it. Why does it fail?

/client/components/App.test.js

```js
describe('App', () => {
  it('renders the app', () => {
    const tree = renderer.create(
      <App />
    ).JSON();
    expect(tree).toMatchSnapshot();
  });
});
```

---

# Testing Connected Components

We need to **connect** "react-redux" components with a **provider** first.

```js
import { Provider } from 'react-redux';
import store from '../store';

const component = renderer.create(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

# Testing Components

- [✓] props
- [✗] data
- [✗] user inputs

---

# Testing Data

How might we test data?

*Think: Where is the data stored?*

---

# Mocking the Store

[Redux-Mock-Store](https://github.com/arnaudbenard/redux-mock-store)

```js
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([ /* middlewares */]);

// set initial data
const store = mockStore({
  pokemonList: []
});

const component = renderer.create(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

# Testing Components

- [✓] props
- [✓] data
- [✗] user inputs

---

# Testing User Inputs

Which user inputs can we test?

---

# Testing User Inputs

Which user inputs can we test?

- click
- input text
- submit
- keypress
- etc.

---
template: inverse

# [Enzyme](http://airbnb.io/enzyme/)

---

# Enzyme

Enzyme is a React testing tool from AirBnB. 

Enzyme is to React Test Utils as JQuery is to the browser.

Take a minute to compare the [React Test Utils](https://facebook.github.io/react/docs/test-utils.html) with [Enzyme](http://airbnb.io/enzyme/docs/api/).

---

# Setup Enzyme

Install Enzyme in your project as a devDependency.

```shell
npm install --save-dev enzyme react-addons-test-utils
```

---

# Rendering Options

Read [Enzyme](http://airbnb.io/enzyme/).

Take a minute and explain the differences between each type.

- shallow
- fullDOM
- static

---

# shallow

Does not render child components.

```js
<div>
  <Child className="child">
</div>
```

This is the most common test rendering.

---

# fullDOM

Renders out all child components.

```js
<div>
  <div className="child">
    <h1>Child</h1>
  </div>
</div>
```

---

# static

Renders to HTML.

```js
<div>
  <div class="child">
    <h1>Child</h1>
  </div>
</div>
```

---

# Common Issue

Running Enzyme and React snapshot testing from the same file will not work.

The issue is related to components rendering twice with the same name.

---

# Enzyme Test

/client/components/PokemonList/Pokemon.events.test.js

```js
import React from 'react';
import ReactDOM from 'react-dom'; // needed
import { shallow } from 'enzyme';

it('triggers a vote action on click', () => {
    let onVote = function() {};
    const props = { monster, onVote };
    const component = shallow(<Pokemon {...props} />);
    component.find('.btn').simulate('click');

    // check that onVote was Called

  });
```

---

# Listening to a Function

How can we check that the `onVote` was called?

(without running the entire app)

---

# Spies

Spies replace a function with a listener.

```js
// create a spy
let onVote = jest.fn();
// listen that the function was called
expect(onVoteSpy).toBeCalled();
// listen to what the function was called with
expect(onVoteSpy).toBeCalledWith(2);
```

You can check if the function was called, or which params it was called with.

---

# Testing Components

- [✓] props
- [✓] data
- [✓] user inputs

---

template: inverse

# Testing Issues

---

# CSS in Jest

`npm install --save-dev jest-css-modules`

Works with `.css`, `.less`, `.sass` & `.styl` files.

```json
"jest": {
  "transform": {
      ".css": "<rootDir>/node_modules/jest-css-modules"
   }
}
```

---

# Babel & Jest 1/2

If you have an issue running Meteor with Jest, this may be the cause.

```json
"jest": {
  "transform": {
      ".jsx?": "<rootDir>/tests/babel-jsx-transform.js"
   }
}
```

See the next slide for the "babel-jsx-transform.js" file contents.

---

# Babel & Jest 2/2

You may need to add other presets as well.

`npm install --save-dev babel-core babel-preset-jest'

```js
const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process(src, filename) {
    if (babel.util.canCompile(filename)) {
      return babel.transform(src, {
        filename,
        presets: [jestPreset], // add other presets here
        retainLines: true,
      }).code;
    }
    return src;
  },
};
```

---

# Testing with TypeScript

Pre-Compile the tests.

Find all tests ending in ".test.ts{x}".
Save your compiled tests in a cache.

```json
"jest": {
    "moduleFileExtensions": ["ts", "tsx", "js"],
    "transform": {
      "^.+\\.(ts|tsx)$": "<rootDir>/preprocessor.js"
    },
    "testRegex": "/__tests__/.*\\.(ts|tsx|js)$"
}
```

See a [Jest TypeScript](https://github.com/facebook/jest/tree/master/examples/typescript) example.

---

# Material-UI & Jest

`react-test-renderer` has several conflicts with Material-UI. 

Use [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json) with enzyme instead. 

`npm install --save-dev enzyme enzyme-to-json react-addons-test-utils`

---

## Challenge

Write unit tests to test your components. Include:
  - props (snapshot testing)
  - user input (with Enzyme and spies)

---

# Advanced Testing

Next class we will look at more advanced testing tools, including:

- more on spies
- stubs
- mocks
- code coverage


{% endhighlight %}
