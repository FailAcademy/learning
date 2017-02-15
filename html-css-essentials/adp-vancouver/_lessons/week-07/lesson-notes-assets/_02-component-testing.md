## Unit Testing Components

What three things can we test about a user component?

Hint (think of what inputs can go into a component)

*( props, user input, data )*

# Testing Components

We had previously looked at Ava.

While Ava excels in Unit Testing, another tool, Jest, excels in testing React.

We'll contrast Jest with Ava, and demonstrate some new tooling.

# Comparing

compare and contrast these two snippets demonstrating tests

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

### Differences

- Jest uses globals (**describe**, **it**, **expect**)
- Jest uses chained assertions (`toBe`, `toEqual`)
- Jest has built in code coverage
- Jest has snapshot testing for React
- Jest is considerably faster

# Re-Write Tests using Jest

# Testing Components

```shell
npm install --save-dev react-test-renderer react-addons-test-utils jest enzyme
```

/client/components/PokemonList/Pokemon.test.js

```js
import React from 'react';
import renderer from 'react-test-renderer';
import Pokemon from './Pokemon';
```

```js
describe('Pokemon', () => {
  it('renders a pokemon', () => {
    // What goes here ?
  });
});
```

```js
it('renders a pokemon', () => {
    const monster = {
      id: 0,
      name: 'Luvdisc',
      description: 'This heart-shaped Pokemon earned its name by swimming after loving couples it spotted in the ocean’s waves.',
      voters: new Set(['first', 'second']),
      votes: 2,
    };
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

```shell
jest --watch
```

# Snapshot Testing

snapshots are added in the __snapshots__ directory.

```js
exports[`Pokemon renders a pokemon 1`] = `
<li
  className="list-group-item">
  <div
    className="row">
    <div
      className="col-xs-2 col-sm-1">
      <button
        className="btn btn-default btn-sm"
        onClick={[Function bound onVote]}
        type="button">
        <span
          className="glyphicon glyphicon-collapse-up" />
         
        2
      </button>
    </div>
    <div
      className="col-xs-10 col-sm-11">
      <h4
        className="list-group-item-heading">
        Luvdisc
      </h4>
      <p
        className="list-group-item-text">
        This heart-shaped Pokemon earned its name by swimming after loving couples it spotted in the ocean’s waves.
      </p>
    </div>
  </div>
</li>
`;
;
```

## Snapshot Testing Commands

* -u - update snapshots for current state
* -a - run all tests
* -p - run a specific test
* -q - quit

## Testing Connected Components

The following code fails. Why?

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

"store not found"

## Connect the Test Store

```js
import { Provider } from 'react-redux';
import store from '../store';

const component = renderer.create(
  <Provider store={store}>
    <App />
  </Provider>
);
```

## Why Snapshot Test

Take a moment and discuss the following tweet.

![Snapshot Testing Question](https://twitter.com/ryanflorence/status/774138264814956544)

