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

- [ ] props
- [ ] data
- [ ] user inputs

---
template: inverse

# [Jest](https://facebook.github.io/jest/)

---

# Compare

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

### Differences

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

- [x] props
- [ ] data
- [ ] user inputs

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

- [x] props
- [x] data
- [ ] user inputs

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

# Enzyme Test

```js
import React from 'react';
import { shallow } from 'enzyme';

it('the vote should call ADD_ONE on click', () => {
  
});
```

---

# Testing Redux

- [x] actions
- [x] reducers
- [x] store
- [ ] middleware

{% endhighlight %}
