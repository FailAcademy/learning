# Lesson: Redux

##### Discussion

1. Good application design is ___________.

*expected: "easy to change", "readable", "isolated", "predictable"

2. Give an example of each in an application:

A) data
B) view
C) logic
D) event

3. Which application design patterns are you familiar with?

* expected: "MVC", "Flux", "Components", etc*

4. 10,000 ft overview of MVC, Flux & Redux.

5. When is it OK to leave state out of your global State object, when designing with Redux?

6. What pattern is better for organizing files? Colocation or 'Duck Typing'? What are the advantages / drawbacks of each?

See diagram:

MVC
------

M    ->   C    ->    V
       <-          <-

Flux
-----

|:  M   :|:       C        :|:   V  :|
|-------|--------------|---- --|
| store | dispatcher | view |
|          | actions       |         |

View  -> Action -> Dispatcher -> Store     ->     View
             - event          - hub        - data & logic
      { type: ADD_ONE }

Redux
-------

|:  M   :|:     C      :|:   V  :|
|-------|--------- --|---- --|
| store | reducers | view |
|          | actions    |         |

View -> Action -> Reducer -> Store -> View
         - event         - logic         - data

5. Concepts:

a) a single source of truth for all state
b) state is read only
c) all changes are pure functions

[src](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)

6. Each group will act out a pattern, visually as an example of how the pattern works.

7. Discuss strengths and weaknesses of each pattern in relation to good design principles in step 1.

8. Download the Redux Chrome extension. View several redux apps with Redux devtools to see how they work. Examples: https://github.com/zalmoxisus/redux-devtools-extension#demo

9. Coding: Create a vote up / down application for a single item using raw javascript.

10. Review app in light of Redux diagrams.
   - discuss each feature in more detail
   - introduce action types, discuss why we might use these
   - discuss which logic should go in the "action creator" and which should go in the "reducer", and why?

11. Challenge students to recreate the up/down app using Redux & React with a single store.

12. Introduce React-Redux "connect" for connecting components to the store. Discuss smart vs. dumb components. Review in relation to design principles from step 1.
