## To Do List with Vanilla JS

### Components
- simple html, css
- clock
- user name
- todo
- background
- weather

### What I learned while making this app
- query selector
  - as document method, it returns the first element whithin the document that matches the specified selector, or group of selectors
  - if there is no match, null is returned
  - `element = document.querySelector(selector)`
  - class selector is `.`, id selector is `#`
- local storage
  - browsers have a simple own storage which consists of sets of `key-value` pair
  - value must be a string. so when you need to store object, use `JSON.stringify()` to convert object to string
  - retreive item : `localstorage.getItem()`
  - store item : `localstorage.setItem()`
- fetch
  - providing accessing and manipulating parts of the HTTP pipeline, such as requests and responses
  - the promise returned from `fetch()` won't reject on HTTP error status even if response is an HTTP 404 or 500
  - the promise will resolve normally (with `ok` property of the response set to false if the response isn't in the range 200-299)
  - only reject on network failure or anything prevented the request from completing
  - `fetch(url).then(response => response.json()).then(data => console.log(data));`