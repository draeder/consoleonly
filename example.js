import ConsoleOnly from './index.js'

let consoleOnly = ConsoleOnly()

// Turn console.only back on
console.only.on()
console.only(3,'This will never log, because 2 has not fired yet')

console.only(1,'This will log first')

console.log('This will never log, because we are only interested in console.only')

console.only(2,'This will log second')

// Turn off console.only
console.only.off()
console.log('This will log as normal')
console.log('So will this')