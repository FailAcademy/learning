---
layout: project
title: Project 1 / Part 1 - Boomtown
due: Thursday, August 15th (beginning of class)
class: gh-check
---

Create a back-end application to support a local sharing economy. The app must use PostgreSQL as a relational database to store shareable items and user info, Node.js/Express as its web server, and GraphQL for its client-facing API.

You can [download the starter repo here.](https://github.com/redacademy/boomtown-starter)

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
- [ ] Contain a build directory with code correctly compiled/transpiled and minified for production
- [ ] Use Prettier to format code

### JavaScript / Node.js Outcomes

Your project must:

- [ ] Define variables where needed with `let` and `const`
- [ ] Use functions to effectively organize code
- [ ] Use consistent, descriptive variable and function names
- [ ] Check for strict equality with comparison operators
- [ ] Demonstrate effective use of control flow (loops, conditionals, etc.)
- [ ] Use objects and arrays (and their built-in methods) to effectively work with data
- [ ] Use `require`/`module.exports` where appropriate
- [ ] Demonstrate effective use of async control flow patterns

### Server-side Outcomes

Your project must:

- [ ] Create and manage a database using CLI/GUI tools
- [ ] Implement a database schema effectively
- [ ] Write queries to efficiently retrieve data from a database
- [ ] Build an API with GraphQL to expose appropriate data to client applications

### Functional Requirements

Your project must:

- [ ] Configure for development and production using app.set/app.get
- [ ] Connect to PostgreSQL using the `node-postgres` library
- [ ] Execute all of the required SQL queries using the `node-postgres` library
- [ ] Use Apollo Server to initialize a GraphQL server
- [ ] Define all fields and types in the GraphQL schema
- [ ] Implement the necessary GraphQL resolvers
- [ ] Use GraphQL Explorer to save the app's necessary queries and mutations, and return the appropriate data from the queries and mutations

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Implement the addItem SQL query in a single SQL statement (No transaction)

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to dev@redacademy.com
