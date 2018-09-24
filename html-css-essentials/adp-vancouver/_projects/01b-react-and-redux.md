---
layout: project
title: Project 1 / Part 2 - Boomtown
due: Monday, July 30th (beginning of class)
class: gh-check
---

Create the front-end UI of a web-based application to support a local sharing economy. Functionally, the app will allow users to browse all items and user profiles, and also share items of their own and request to borrow items from other users.

Your project must connect to the server built in the first part of this project using Apollo Client, use React and the Material UI library to build out the application's UI, use React Router for routing, and Redux to manage some UI-related state.

## Requirements

To receive a “Complete” for this project, your submission will need to satisfy the following criteria:

### Development Workflow Requirements

Your project must:

- [ ] Demonstrate effective organization of the project's root directory
- [ ] Have a Git repository initialized in its root directory which is pushed to GitHub
- [ ] Use a `.gitignore` to exclude unnecessary files/folders, and ensure that no unnecessary files/folders are erroneously committed to the repository
- [ ] Contain an appropriate number of commits for the scope of the project
- [ ] Use properly-formatted commit messages
- [ ] Contain a `README.md` file describing the project (e.g. technologies used, personal learnings, installation instructions, etc.) and is appropriately formatted with Markdown
- [ ] Remove extraneous code and comments from files
- [ ] Contain a `package.json` with all applicable fields completed
- [ ] Run app without errors
- [ ] Resolve all errors and warnings that appear in developer tools console
- [ ] Contain a build directory with code correctly compiled/transpiled and minified for production
- [ ] Use Prettier to format code

### JavaScript / Node.js Requirements

Your project must:

- [ ] Define variables where needed with `let` and `const`
- [ ] Use functions to effectively organize code
- [ ] Use consistent, descriptive variable and function names
- [ ] Check for strict equality with comparison operators
- [ ] Demonstrate effective use of control flow (loops, conditionals, etc.)
- [ ] Use objects and arrays (and their built-in methods) to effectively work with data
- [ ] Use default and named exports where appropriate
- [ ] Use ES2015 modules with import and export keywords where appropriate
- [ ] Use `require`/`module.exports` where appropriate
- [ ] Demonstrate effective use of async control flow patterns

### Server-side Requirements

Your project must:

- [ ] Write queries to efficiently retrieve data from a database
- [ ] Build an API with GraphQL to expose appropriate data to client applications
- [ ] Implement authentication and authorization to restrict user access to data

### React Requirements

Your project must:

- [ ] Separate UI into components with correct level of abstraction
- [ ] Use sub-directories to organize component files on a per component basis
- [ ] Reflect the designer's vision for the application UI
- [ ] Use functional stateless components (implement class components only when necessary)
- [ ] Use `propTypes` to document all component props (with no validation errors)
- [ ] Name components and component files/directories using Pascal case
- [ ] Use component lifecycle methods only where required
- [ ] Use React's Context API for state management where appropriate
- [ ] Use Apollo Client's Query and Mutation components to manage data

### Functional Requirements

Your project must:

- [ ] Use React Router to implement the full routing scheme for the app, and use routing to update the URL when the view changes
- [ ] Contain an "items" page that displays a list of available items (with unavailable items hidden)
- [ ] Contain a "profile" page for each user that displays profile data about each user with a list of their owned items
- [ ] Contain a "share" page with a working form that allows users to add new items to the app
- [ ] Contain a login form page where users authenticate with email and password
- [ ] Implement form validation and provide user feedback resulting from invalid input data
- [ ] Persist logged-in state on page reload
- [ ] Contain a functioning logout button
- [ ] Contain protected routes that are only available to a logged-in user
- [ ] Use Gravatar to display user avatars
- [ ] Refetch relevant GraphQL queries upon successful data mutation to keep the UI in sync
- [ ] Use Redux (with React Redux) to manage the share items form UI state
- [ ] Use Material UI v1 as a UI component library, and select the correct components to realize the app's UI design

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Implement borrow and return functionality for items

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
