# Lesson: Redux (3hrs)

### Intro (5)

Remind students that in this lesson we will approach learning in two ways:
- top down: a birds eye view of how things work
- bottom up: a low level look at how redux works in code

### Discussion (15)

1. "A well-designed application is..."

Ask students to fill in the blank.

*( expected: "easy to change", "readable", "isolated", "predictable" )*

2. Give an example of each in an application:

A) data
B) view
C) logic
D) event

3. Which application design patterns are you familiar with?

*( expected: "MVC", "Flux", "Components", etc )*

We will look at a 10,000 ft overview of MVC, Flux & Redux.


### MVC Overview (20)

- What are the parts of MVC?

1. model
2. controller
3. view

- What does each part do?

1. model = data
2. controller = logic, events, change data
3. view = view, trigger events

```
M   ->   C    ->    V
    <-        <-
```

- Examples

1. AngularJS
2. BackboneJS
3. Ember.js
4. Knockout.js

Take time to draw out each diagram with the students before showing the slide diagrams.

### React Design Overview

Draw the tree diagram for modeling the simple use case.

Be sure to highlight passing of props, problems with sharing local state, and any pitfalls that passing by reference might create.

### Redux Overview (40)

Give students 10 minutes to read and discuss Redux in groups. Tell them to create a diagram or chart, and you will select your favourite to present.

|:  M  :|:    C    :|:  V  :|
|-------|-----------|------ |
| store | reducers  |   X   |
|       | actions   |       |

```
View -> Action -> Reducer -> (Middleware) -> Store -> View
       - event   - logic                    - data
```

How is Redux different from Flux?

a) a single source of truth for all state
b) all changes are pure functions
c) middleware


5. Use the redux devtools extension to show how Redux works in a todo app.

  - git clone https://github.com/gaearon/redux-devtools
  - go into devtools and install deps, run the app
  - download the "Redux Chrome extension".
  - click and view actions

6. Each group will choose a different app from [examples](http://redux.js.org/docs/introduction/Examples.html) and act out how Redux works as a play or dance. Verify student understanding. Prepare paper and pens for name cards.


### Review (5)

Discuss strengths and weaknesses of each pattern (MVC, Flux, Redux) in relation to good design principles in step 1.


### Coding (70)

Students will code along to build a Redux "Worst Pokemon" voting up. Encourage students to experiment, help each other and break things.

Follow git commit diffs. Tutorial walks through. See the added talking points.

  1. state
    - one source of truth
    - `store.getState()` is read only
  2. action
    - discuss how to name actions (REDUCER_VERB)
    - action should pass on all data reducers require
  3. reducer
    - pure functions
    - return a new state, not mutating state
    - cannot run `store.dispatch` from a reducer. Why?
  4. multiple reducers

### Review (10)

Review app in light of Redux diagrams.
   - discuss each part of Redux and their role (store, action, reducer, dispatch, getState)
   - discuss which logic should go in the "action creator" and which should go in the "reducer", and why?
   *( all data the reducer needs for calculating should go into the action creator )*

### Challenge

1. Challenge students to add more actions.
2. Challenge students to add more reducers.

### Notes: 

npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools

