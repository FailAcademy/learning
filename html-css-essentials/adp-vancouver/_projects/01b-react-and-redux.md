---
layout: project
title: Project 1 / Part 2 - Boomtown
due: Monday, July 30th (beginning of class)
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
- [ ] Use ESLint
- [ ] Run without errors with `npm run dev`
- [ ] Have appropriate files compiled into a `build` directory

### Functional

Your project must:

- [ ] Contain a login form allowing users to authenticate with email and password
- [ ] Implement form validation & provide user feedback resulting from invalid input data
- [ ] Persist logged in state on page reload
- [ ] Contain a functioning logout button
- [ ] Contain protected routes that are only visible to logged-in users
- [ ] Allow logged-in users to share new items
- [ ] Display shared items in a list view
- [ ] Display individual user data in a profile view
- [ ] Use Gravatar to display user avatars
- [ ] Use routing to update the URL when the view changes
- [ ] Refetch relevant GraphQL queries upon successful data mutation to keep the UI in sync

### Development

Your project must:

- [ ] Contain components built using valid JSX
- [ ] Use ES2015 `import` and `export`
- [ ] Contain components created using `React.Component`, `const`, or `function` only
- [ ] Chain transformations with array methods (`.map`, `.filter`, etc.)
- [ ] Use React Lifecycle method where appropriate
- [ ] Implement React Router
- [ ] Implement Redux to manage application state (incl. Redux Dev Tools)
- [ ] Implement "presentational" and "container" patterns appropriately throughout the application
- [ ] Use [`react-redux`](https://github.com/reactjs/react-redux) `connect` to map state to props
- [ ] Use Apollo Client (`apollo-client`) to query data from the GraphQL server
- [ ] Use Apollo [Query](https://www.apollographql.com/docs/react/essentials/queries.html) and [Mutation](https://www.apollographql.com/docs/react/essentials/mutations.html) components to manage application data
- [ ] Reflect the designer's vision for the application's UI

### Quality

Your project must:

- [ ] Contain an organized file tree (using the pattern described in class)
- [ ] Use sub-directories to organize component files (on a per component basis)
- [ ] Be free of lint errors from ESLint
- [ ] Use `propType` validations for all components
- [ ] Be free of `propType` validation errors in console
- [ ] Be free of console warnings and errors

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Implement Borrow and Return functionality

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
