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

# Mock The Data

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

```js
it('renders a pokemon', () => {
  /* ... */
  const component = renderer.create(
    <Pokemon
      monster={monster}
      onVote={(x) => x + 1 }
    />
  );
  let tree = component.toJSON();
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

1. `const component = renderer.create()`
2. let tree = component.toJSON();
3. expect(tree).toMatchSnapshot();

---

# Common Issues

Write the following test and run it. Why does it fail?

/client/components/App.test.js

```js
describe('App', () => {
  it('renders the app', () => {
    const component = renderer.create(
        <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

---

# Testing Connected Components

We need to **connect** components with a **provider** first.

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

Which use inputs do we want to test?

---

# Testing User Inputs

- click
- input text
- submit
- keypress
- etc.

---

# Enzyme

Enzyme is a React testing tool from AirBnB. 

```shell
npm install --save-dev enzyme react-addons-test-utils react-dom
```

---

# Rendering Options

Read [Enzyme](http://airbnb.io/enzyme/).
Take a minute and guess the differences between each type.

- shallow
- fullDOM
- static

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
