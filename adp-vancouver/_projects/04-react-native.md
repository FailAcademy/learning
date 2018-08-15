---
layout: project
title: Project 4 - R10
due: Monday, August 27th (beginning of class)
class: gh-check
---

Build a mobile application using React Native for an upcoming developer conference called R10.

Your project must be cross-platform (iOS/Android) and contain a database (Realm).

You can [download the project assets here](https://s3-us-west-2.amazonaws.com/red-adp/project-files/project-04.zip).

## Configuaration

### API Endpoint

You can fetch content for this app at the following GraphQL endpoint:

**https://api.graph.cool/simple/v1/cjh2hph6n6njl0108f6n59j3j**

To explore the schema for this GraphQL API, visit **[graphqlbin.com](https://www.graphqlbin.com/)** and paste in the above endpoint URL to launch the GraphQL Playground.

Please note that this API is read-only for unauthenticated users, so no mutation operations are permitted.

### Design specs

**Colours:**

- Medium Grey: `#999999`
- Light Grey: `#e6e6e6`
- Blue: `#8797D6`
- Purple: `#9963ea`
- Red: `#cf392a`

**Fonts:**

- Montserrat Regular
- Montserrat Light

## Requirements

### Common

Your project must:

- [ ] Be pushed to Github
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [ ] Use Prettier to format your code

### Functional

Your project must:

- [ ] Contain Schedule, Session, Speaker, Faves, and About screens
- [ ] Display a loading indicator when data is fetched by the app
- [ ] Display the conference sessions in chronological order in a `SectionList` with section headers (based on the start time) in the Schedule screen
- [ ] Display an individual conference session's details in a Session screen when a session is tapped from within the Schedule screen
- [ ] Display information about a session's speaker in a lightbox-style Speaker screen when the speaker's name is tapped
- [ ] Allow users to favourite and un-favourite sessions, and display saved favourites in a Faves Scene
- [ ] Implement animated show/hide functionality for the Code of Conduct sections in the About screen (using React Native's `Animated` module)

### Development

Your project must:

- [ ] Contain components built using valid JSX
- [ ] Use ES2015 `import` and `export`
- [ ] Contain components created using `React.Component`, `const`, or `function` only
- [ ] Implement "presentational" and "container" components appropriately throughout the application
- [ ] Use Apollo Client to request data from the provided GraphQL endpoint
- [ ] Include React's context API for state management of faves in the app
- [ ] Make appropriate use of React Native's UI components (including `<View>`, `<Text>`, `<Image>`, `<SectionList>`, `<TouchableHighlight>`, etc.)
- [ ] Implement styles on a per-component basis using `Stylesheet.Create`
- [ ] Leverage code-reuse strategies across iOS and Android platforms as much as possible
- [ ] Use [ExNavigation](https://github.com/wix/react-native-navigation) to implement a navigator (iOS/Android), tab bar (iOS only), and drawer (Android only) for screen navigation
- [ ] Use [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) for icon assets throughout the app (specifically, the Octicon library)
- [ ] Use [React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient) to generate the gradient background
- [ ] Use [Realm React Native](https://realm.io/docs/react-native/latest/) as an embedded database

### Quality

- [ ] Contain an organized file tree separating stateless components from stateful scenes, as well as sub-directories for organizing files with configuration code reusable functions
- [ ] Contains prop-types validation and be free of prop-type validation errors and warnings

### Stretch Goals

Want to challenge yourself? Your project could also:

**Enhance UX:**

- [ ] Add a custom splash screen and app icon for iOS and Android

**Include a Map screen:**

- [ ] Add an additional screen containing a map using [React Native Maps](https://github.com/airbnb/react-native-maps) with a custom image pin to show the conference location

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mandi@redacademy.com.
