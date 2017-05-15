---
layout: project
title: Project 4 - r10
due: Monday, June 5th (beginning of class)
class: gh-check
---

Build a mobile application using React Native for an upcoming developer conference called R10.

Your project must be cross-platform (iOS/Android) and contain a database (Realm).

You can [download the project assets here](https://s3-us-west-2.amazonaws.com/red-adp/project-files/project-04.zip).

## Configuaration

### API Endpoints

You can fetch content for this app at the following endpoints:

**Sessions:**
https://r10app-95fea.firebaseio.com/sessions.json

**Speakers:**
https://r10app-95fea.firebaseio.com/speakers.json

**Single Speaker:**
[https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="-KZ2o1CzG5GOfmURNSUB"](https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22-KZ2o1CzG5GOfmURNSUB%22) (`speaker_id` is different for each speaker)

**Code of Conduct:**
https://r10app-95fea.firebaseio.com/code_of_conduct.json

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
- [ ] Contain this self-evaluated spec checklist renamed `specs.md`
- [ ] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)

### Functional

Your project must:

- [ ] Contain Schedule, Session, Speaker, Faves, and About scenes
- [ ] Display a loading indicator when data is fetched by the app
- [ ] Display the conference sessions in chronological order in a `ListView` with section headers (based on the start time) in the Schedule scene
- [ ] Display an individual conference session's details in a Session scene when a session is tapped from within the Schedule scene
- [ ] Display information about a session's speaker in a lightbox-style Speaker scene when the speaker's name is tapped
- [ ] Allow users to favourite and un-favourite sessions, and display saved favourites in a Faves Scene
- [ ] Implement animated show/hide functionality for the Code of Conduct sections in the About scene (using React Native's `Animated` module)

### Development

Your project must:

- [ ] Contain components built using valid JSX
- [ ] Use ES2015 `import` and `export`
- [ ] Contain components created using `React.Component`, `const`, or `function` only
- [ ] Implement "presentational" and "container" components appropriately throughout the application
- [ ] Include Redux for state management in the app
- [ ] Make appropriate use of React Native's UI components (including `<View>`, `<Text>`, `<Image>`, `<ListView>`, `<TouchableHighlight>`, etc.)
- [ ] Implement styles on a per-component basis using `Stylesheet.Create`
- [ ] Leverage code-reuse strategies across iOS and Android platforms as much as possible
- [ ] Use [ExNavigation](https://github.com/wix/react-native-navigation) to implement a navigator (iOS/Android), tab bar (iOS only), and drawer (Android only) for scene navigation
- [ ] Use [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) for icon assets throughout the app (specifically, the Octicon library)
- [ ] Use [React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient) to generate the gradient background
- [ ] Use [Realm React Native](https://realm.io/docs/react-native/latest/) as an embedded database

### Stretch Goals

Want to challenge yourself? Your project could also:

**Improve code efficiency and quality:**

- [ ] Use Flow for static typechecking in the app

**Enhance UX:**

- [ ] Cache requests made to the Firebase app to improve performance

**Include a Map scene:**

- [ ] Add an additional scene containing a map using [React Native Maps](https://github.com/airbnb/react-native-maps) with a custom image pin to show the conference location

## Submission Instructions

When you’re ready to submit your project, **please email a link to your GitHub repository containing your project** to mandi@redacademy.com.
