import ConsoleOnly from './index.js'

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

console.only('This will not log, because console.only has been disabled')