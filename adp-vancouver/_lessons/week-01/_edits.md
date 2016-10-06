# Lesson Edits
----

## Day 1

## Day 2

- Students had some confusion over React rendering. They didn't know you can only render a single element.


The following doesn't work:

```js
render() {
  return array.map(a => <div>{a}></div>)
}
```

The following works:

```js
render() {
  return <div>
    {array.map(a => <div>{a}></div>)}
    </div>
}
```


- React components can have multiple render statements

```js
render() {
  switch(this.props.value) {
    case 1:
      return <div>Only one</div>
    case 2:
      return <div>More than one</div>
    default:
      return <div>Error: Not Found</div>
  }
}
```

## Day 3

Topics/Questions

- `PureComponent`

- students seem unclear about what THIS is:

  `const component = ({THIS}) => { ... }`

  - explain that the first thing passed in is `props`
  - show them that `const { THIS } = this.props` is the same

- Discuss why we use a `key` when mapping over arrays of components

## Day 4

## Topics/Questions

- browser history
  - why?
  - how it works

- view urls on other websites
  - Medium (what is a hash at the end, why is it there?)
  - Reddit

- what is a hash

- issues with relative/absolute paths
`<Link to="path/1">Link</Link>` - adds paths on the end of the current path
This can result in "http://localhost:8000/path/path/path/path/1"
Use an absolute link: `<Link to="/path/1">Link</Link>`

## Directions

- clearer directions in lab activity about:
  - using routes for sorting (newest, popular)
    - how to filter down to one component (not best solution)
    - how to use lifecycle methods to load that one component

## Day 5

## Project Notes

## Miscellaneous
