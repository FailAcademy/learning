---
layout: project
title: Project 1 / Part 1 - Boomtown
due: Monday, July 16th (beginning of class)
class: gh-check
---

Continue working on your Boomtown by adding the server-side components. Once completed, your project should have a functioning user login (with protected routes) and allow users to share new items.

Your project must include a server (Node/Express/GraphQL), a connected database (Postgres), a connected client (React), and form with submit and data validation (Redux-Form), and user authentication (Firebase).

## Requirements

### Common

Your project must:

- [ ] Be pushed to Github
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [ ] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)
- [ ] Run without errors with `npm run dev` or `npm start`
- [ ] Have appropriate files compiled into a `build` directory

### Functional

Your project must:

- [ ] Start without errors
- [ ] Be configured for development and production using app.set / app.get
- [ ] Connect to Postgres using the `node-postgres` library
- [ ] Execute all of the required SQL queries using the `node-postgres` library
- [ ] Use Apollo Server to initialize a GraphQL server
- [ ] Define the necessary GraphQL schema
- [ ] Use GraphQL Explorer to save all the necessary queries and mutations required for the project
- [ ] Implement the necessary GraphQL resolvers
- [ ] Return the appropriate data from all required GraphQL queries and mutations

### Development

Your project must:

- [ ] Conform to the file / folder patterns established by the starter project

### Quality

Your project must:

- [ ] Be comprised of two repos separating client and server code
- [ ] Be free of lint errors from ESLint

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Implement Full-Text Search using Postgres

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mackenzie@redacademy.com.
