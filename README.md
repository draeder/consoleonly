# ConsoleOnly
> Write to the console only after an expected write has already occurred

- Useful for debugging and tracing
- Suppresses console logging you are not interested in

## Install
```
$ npm i consoleonly
```

## Example
```js
import ConsoleOnly from 'consoleonly'

let consoleOnly = ConsoleOnly()

// Enable console.only
console.only.on()

console.only(3,'This will never log, because 2 has not fired yet')
console.only(1,'This will log first')
console.log('This will never log, because we are only interested in console.only')
console.only(2,'This will log second')

// Disable console.only
console.only.off()

console.log('This will log as normal')
console.log('So will this')
```