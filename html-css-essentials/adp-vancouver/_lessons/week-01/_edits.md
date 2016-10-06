# Lesson Edits
----

## Day 1

## Day 2

- have a discussion about naming components.

  - <Posts />         ->    <PostList />
  - <Post />          ->    <PostListItem />, <Post />
  - <SinglePost />    ->    <Post />, <PostDetails/>

  - be descriptive
  - start with the base noun, so posts can be easily categorized


## Day 3

Topics/Questions

- `PureComponent`

- students seem unclear about what THIS is:

  `const component = ({THIS}) => { ... }`

  - explain that the first thing passed in is `props`
  - show them that `const { THIS } = this.props` is the same

- Discuss why we use a `key` when mapping over arrays of components

## Day 4

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

- clearer directions in lab activity about:
  - using routes for sorting (newest, popular)
    - how to filter down to one component (not best solution)
    - how to use lifecycle methods to load that one component

## Day 5

## Project Notes

## Miscellaneous
