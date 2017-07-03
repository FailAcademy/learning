---
layout: project
title: Project 1 / Part 2 - Boomtown
due: Monday, July 31st (beginning of class)
class: gh-check
---

Continue working on your Boomtown by adding the server-side components. Once completed, your project should have a functioning user login (with protected routes) and allow users to share new items.

Your project must include a server (Node/Express/GraphQL), a connected database (PostgreSQL), a connected client (React), and form with submit and data validation (Redux-Form), and user authentication (Firebase).

## Requirements

### Common

Your project must:

- [ ] Be pushed to Github 
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [ ] Contain this self-evaluated spec checklist renamed `specs.md`
- [ ] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)
- [ ] Run without errors with `npm run dev` or `npm start`
- [ ] Have appropriate files compiled into a `build` directory

### Functional

Your project must:

- [ ] Contain a login form allowing users to authenticate with email and password
- [ ] Persist logged in state on page reload
- [ ] Contain a functioning logout button
- [ ] Containe protected routes that are only visible to logged-in users
- [ ] Allow logged-in users to share new items
- [ ] Require that new items contain a title, description, tags, and an image
- [ ] Provide user feedback resulting from invalid input data
- [ ] Disable the submit button when data in form fields are invalid

### Development

Your project must:

- [ ] Implement form validation (client-side)
- [ ] Use Firebase to authenticate user logins and passwords (server-side)
- [ ] Use Apollo Server (`graphql-server-express`) to initialize a GraphQL server and define a GraphQL schema with corresponding resolvers and mutations
- [ ] Use Apollo Client (`apollo-client`) to query data from the GraphQL server in the client and to handle mutations
- [ ] Integrate Apollo Client in the Redux store
- [ ] Refetch relevant GraphQL queries upon successful data mutation to keep the UI in sync
- [ ] Use PostgreSQL to store item data
- [ ] Make efficient database queries (server-side)
- [ ] Save state to database (server-side)

### Quality

Your project must:

- [ ] Be comprised of two repos separating client and server code
- [ ] Be free of lint errors from ESLint
- [ ] Use `propType` validations for all components
- [ ] Be free of `propType` validation errors in console

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Allow logged-in users to request available items from other users (using a modal-style component)

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
