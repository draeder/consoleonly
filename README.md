# ConsoleOnly
> Write to the console only after an expected write has already occurred

- Suppresses console logging you are not interested in
- Useful for debugging and tracing
- Zero dependencies
- Works in Node and the Browser

## Install
```
$ npm i consoleonly
```

## Init
### Node
```js
import ConsoleOnly from 'consoleonly'
// ... See example.js
```

### Browser
```html
<script type="module">
  import ConsoleOnly from 'https://cdn.jsdelivr.net/gh/draeder/consoleonly/index.js'
  // ... See example.html
</script>
```

## Example
```js
let consoleOnly = ConsoleOnly()

// Enable console.only
console.only.on()

console.only('This will never log, because console.only expects an index > 0')

console.only(3,'This will never log, because 2 has not fired yet')

console.only(1,'This will log first')

console.log('This will never log, because we are only interested in console.only')

console.only(2,'This will log second')

// Disable console.only
console.only.off()

console.log('This will log as normal')

console.log('So will this')

console.only(4, 'This will not log, because console.only has been disabled')
```
## Credit
Thanks to [@amark](https://github.com/amark/) whose original version of this is only one line of code.
