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