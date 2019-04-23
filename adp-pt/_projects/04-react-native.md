---
layout: project
title: Project 4 - R10
due: Thursday, March 12th (beginning of class)
class: gh-check
---

Build a mobile application using React Native for an upcoming developer conference called R10.

Your project must be cross-platform (iOS/Android) and contain a database (Realm).

You can [download the project assets here](https://s3-us-west-2.amazonaws.com/red-adp/project-files/project-04.zip).

## Configuaration

### API Endpoint

You can fetch content for this app at the following GraphQL endpoint:

**https://r10.academy.red/graphl**

To explore the schema for this GraphQL API, visit the same URL in your browser to launch the GraphQL playground interface.

Please note that this API is read-only, so no mutation operations are permitted.

## Design Specs

### Colours

- Medium Grey: `#999999`
- Light Grey: `#e6e6e6`
- Blue: `#8797D6`
- Purple: `#9963ea`
- Red: `#cf392a`

### Fonts

- Montserrat Regular
- Montserrat Light

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
- [ ] Use ES2015 modules with `import` and `export` keywords where appropriate
- [ ] Demonstrate effective use of async control flow patterns

### Server-side Requirements

Your project must:

- [ ] Create and manage a database using CLI/GUI tools
- [ ] Implement a database schema effectively
- [ ] Write queries to efficiently retrieve data from a database

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

### React Native Requirements

Your project must:

- [ ] Make appropriate use of React Native's UI components (including `<View>`, `<Text>`, `<Image>`, `<SectionList`>`,`<TouchableHighlight>`, etc.)
- [ ] Implement styles on a per-component basis using Stylesheet.Create
- [ ] Leverage code reuse strategies across iOS and Android
- [ ] Use React Navigation to implement a navigator (iOS/Android), tab bar (iOS only), and drawer (Android only) for screen navigation

### Functional Requirements

Your project must:

- [ ] Contain a Schedule scene where conference sessions are displayed in chronological order in a SectionList with section headers (based on the start time), styled appropriately
- [ ] Contain a Session scene where an individual conference session's details are displayed with the ability to fave/unfave the session, styled appropriately
- [ ] Contain a Speaker scene with information about a session speaker displayed light-box style, styled appropriately
- [ ] Contain a Faves scene where only conference sessions that have been faved are displayed in chronological order in a SectionList with section header (based on the start time), styled appropriately
- [ ] Contain an About scene with a list of code of conduct items that can be toggled open and closed (with animation added), styled appropriately
- [ ] Display a loading indicator when data is fetched by the app
- [ ] Use React Native Vector Icons for icon assets throughout the app (specifically, use the Ionicon library)
- [ ] Use React Native Linear Gradient to generate the gradient backgrounds in the app
- [ ] Use React Native Realm as the embedded database

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Add a custom splash screen and app icon for iOS and Android
- [ ] Add an additional scene containing a map using React Native Maps with a custom image pin to show the conference location

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to dev@redacademy.com
