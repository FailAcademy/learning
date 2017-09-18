---
layout: project
title: Project 1 / Part 1 - Boomtown
due: Monday, October 16th (beginning of class)
class: gh-check
---

Create the front-end UI of a web-based application to support a local sharing economy. Functionally, the app will allow users to browse all items and user profiles by the end of the first half of the project, and ultimately also share items of their own and request to borrow items from other users during the second half.

Your project must use local mock data, React and the Material UI library to build out the application's UI, Redux and `react-redux` to manage application state, and React Router for routing.

You can [download the project files here.](https://s3-us-west-2.amazonaws.com/red-adp/project-files/project-01.zip)

And you can [download the starter repo here.](https://github.com/redacademy/boomtown-starter)

## Requirements

To receive a “Pass” grade for this project, your submission will need to satisfy the following criteria:

### Common

Your project must:

- [ ] Be pushed to Github 
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [ ] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)
- [ ] Run without errors with `npm run dev`
- [ ] Have appropriate files compiled into a `build` directory

### Functional

Your project must:

- [ ] Load mock data for "items" and "users" using `json-server`
- [ ] Display shared items in a masonry view
- [ ] Allow item filtering (by tags)
- [ ] Display individual user data in a profile view
- [ ] Use Gravatar to display user avatars
- [ ] Use routing to update the URL when the view changes

### Development

Your project must:

- [ ] Contain components built using valid JSX
- [ ] Use ES2015 `import` and `export`
- [ ] Contain components created using `React.Component`, `const`, or `function` only
- [ ] Chain transformations with array methods (`.map`, `.filter`, etc.)
- [ ] Use React Lifecycle method where appropriate
- [ ] Implement React Router to:
  - Use nested routes with a `Layout` component
  - Include Items, Profile, Login, and 404 routes
  - Use route params to display individual user profile information
  - Use the `Switch` component and `exact` prop appropriately
  - Use browser history
- [ ] Implement Redux to manage application state
- [ ] Hook up [`react-router-redux`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) sync routing with Redux DevTools
- [ ] Implement "presentational" and "container" components appropriately throughout the application
- [ ] Use [`react-redux`](https://github.com/reactjs/react-redux) `connect` to map state to props
- [ ] Add and use [`redux-thunk`](https://github.com/gaearon/redux-thunk) middleware for async dispatches
- [ ] Reflect the designer's vision for the application's UI

### Quality

Your project must:

- [ ] Contain an organized file tree (using the pattern described in class)
- [ ] Use sub-directories to organize component files (on a per component basis)
- [ ] Be free of lint errors from ESLint
- [ ] Use a unique `key` for all items in lists
- [ ] Use `propType` validations for all components
- [ ] Be free of `propType` validation errors in console

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Implement localStorage to preserve state

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
