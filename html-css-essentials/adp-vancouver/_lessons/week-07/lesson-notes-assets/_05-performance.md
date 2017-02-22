
# Performance Measuring Demo

An example of a simple testing tool built with `performance.now()`. 

This goes with the Performance slides.

/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Perf</title>
</head>
<body>
  <h3>Measuring Performance</h3>
  <button id="run">Run</button>
  <span id="perfTime"></span>

  <script src="./perf.js"></script>
</body>
</html>
```

/perf.js

```js
function run() {
  let total = 0;
  for (let i = 1; i < 100000; i++) {
    total += i;
  }
  return total;
}

function measurePerf(fn) {
  let start = performance.now();
  fn();
  let end = performance.now();
  return end - start;
}

document.getElementById("run")
  .addEventListener("click", () => {
    document.getElementById('perfTime').innerText = measurePerf(run);
  });
```

---

# Median Perf

The second testing tool which loops the test to grab the median.

```js
let runs = [];

function run() {
  let total = 0;
  for (let i = 1; i < 100000; i++) {
    total += i;
  }
  return total;
}

function measurePerf(fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  runs.push(duration);
  return duration;
}

function medianPerf(list) {
  let middleIndex = Math.floor(list.length / 2);
  return list[middleIndex];
}

document.getElementById("run")
  .addEventListener("click", () => {
    measurePerf(run);
    document.getElementById('perfTime').innerText = medianPerf(runs);
  });
```
