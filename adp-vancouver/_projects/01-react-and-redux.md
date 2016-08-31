---
layout: project
title: RED it (1/2)
due: Week 3 (beginning of class)
---

Create a Product Hunt / Reddit clone that transforms existing data into a view using posts and categories.

Your project must include the following:
* Data ( *JSON* )
* UI ( *React* )
* Data Layer ( *Redux, React-Redux* )
* Router ( *React-Router* )

## Requirements

### Functional
- [ ] loads mock data as "posts" and "categories"
- [ ] post: display in a list
- [ ] post: sort (by "newest", "popularity")
- [ ] post: filter (by category)
- [ ] post: vote up
- [ ] routes: url changes with "sort" and "filter"

### Common
- [ ] project pushed to Github
- [ ] contains "README.md" with project summary and setup
- [ ] contains [valid "package.json"](http://browsenpm.org/package.json) fields filled out
- [ ] contains ".gitignore" file ignoring "node_modules"
- [ ] contains this self-evaluated spec checklist renamed "specs.md"
- [ ] [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] small, single purpose Git commits
- [X] setup ESLint using the [AirBnB style-guide](https://github.com/airbnb/javascript)
- [X] project runs with `npm start`
- [X] files compiled into a "build" directory

### Development
- [ ] components built using valid JSX
- [ ] use ES2015 `import` and `export`
- [ ] components only created using `React.Component`, `const`, or `function`
- [ ] chain transformations with array methods (`.map`, `.filter`, etc.)
- [ ] use [CSS modules](https://github.com/css-modules/css-modules) for inline styles
- [ ] use [React LifeCycle methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods) where appropriate
- [ ] implement ["react-router"](https://github.com/reactjs/react-router) including:
  - a "layout" template
  - an "indexRoute"
  - wrap the "browserHistory" object
  - 3+ routes
  - pass params into routes for filter and sort
- [ ] hook up ["react-router-redux"](https://github.com/reactjs/react-router-redux)
- [ ] implement ["Redux"](https://github.com/reactjs/redux)
- [ ] distinguish between ["presentational" and "container"](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.grh9dzoiy) components
- [ ] use ["react-redux"](https://github.com/reactjs/react-redux) `connect` to map state to props
- [ ] use `connect` to map dispatch to props
- [ ] add ["redux-logger"](https://github.com/evgenyrodionov/redux-logger) middleware during "development" mode

### Quality
- [ ] organized file tree. See [an example](http://marmelab.com/blog/2015/12/17/react-directory-structure.html).
- [ ] no lint errors from ESLint
- [ ] one component, one file
- [ ] unique `key` for all items in lists
- [ ] [propType validations](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) for components
- [ ] no propType validation errors in console
- [ ] no logging to the console in "development" mode

### Stretch Goals
- [ ] use only pure functions without side effects
- [ ] arguments passed to components using "props" only, no use of `setState`
- [ ] write actions using the [Flux Standard Action](https://github.com/acdlite/flux-standard-action) pattern
- [ ] impressive styles
- [ ] add and use ["redux-thunk"](https://github.com/gaearon/redux-thunk) middleware for async dispatches
