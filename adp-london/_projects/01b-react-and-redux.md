---
layout: project
title: Project 1 / Part 2 - Boomtown
due: Monday, July 30th (beginning of class)
class: gh-check
---

Create the front-end UI of a web-based application to support a local sharing economy. Functionally, the app will allow users to browse all items and user profiles, and also share items of their own and request to borrow items from other users.

Your project must connect to the server built in the first part of this project using Apollo Client, use React and the Material UI library to build out the application's UI, use React Router for routing, and Redux to manage some UI-related state.

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
- [ ] Run without errors with `npm start`
- [ ] Have appropriate files compiled into a `public` directory (in the `server` directory)

### Functional

Your project must:

- [ ] Contain a login form allowing users to authenticate with email and password
- [ ] Implement form validation and provide user feedback resulting from invalid input data
- [ ] Persist logged in state on page reload
- [ ] Contain a functioning logout button
- [ ] Contain protected routes that are only visible to logged-in users
- [ ] Allow logged-in users to share new items
- [ ] Display shared items in a list view (with unavailable items hidden)
- [ ] Display individual user data and owned items data in a profile view
- [ ] Contain a working form for adding new items to the app
- [ ] Use Gravatar to display user avatars
- [ ] Use routing to update the URL when the view changes
- [ ] Refetch relevant GraphQL queries upon successful data mutation to keep the UI in sync

### Development

Your project must:

- [ ] Contain components built using valid JSX
- [ ] Use ES2015 `import` and `export`
- [ ] Contain components created using `React.Component`, `const`, or `function` only
- [ ] Use React Lifecycle methods if/where appropriate
- [ ] Implement "presentational" and "container" patterns appropriately throughout the application
- [ ] Implement React Router
- [ ] Use [Apollo Client](https://github.com/apollographql/apollo-client) to query data from the GraphQL server
- [ ] Use Apollo's [`Query`](https://www.apollographql.com/docs/react/essentials/queries.html) and [`Mutation`](https://www.apollographql.com/docs/react/essentials/mutations.html) components to manage application data
- [ ] Implement Redux to manage the share items form UI state
- [ ] Use [`react-redux`](https://github.com/reactjs/react-redux) `connect` to map state to props
- [ ] Use [Material UI v1](https://material-ui.com/) as a UI component library
- [ ] Reflect the designer's vision for the application's UI

### Quality

Your project must:

- [ ] Contain an organized file tree (using the pattern established in the start project)
- [ ] Use sub-directories to organize component files (on a per component basis)
- [ ] Name component classes and their containing directories in Pascal case
- [ ] Use `propType` validations for all components
- [ ] Be free of `propType` validation errors in console
- [ ] Be free of console warnings and errors
- [ ] Be formatted with Prettier

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Implement borrow and return functionality for items

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
