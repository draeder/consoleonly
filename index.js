export default function ConsoleOnly(){
  const log = console.log
  let c = 1
  console.only = function(i, s) {
    if(i && i == c){
      log.apply(console, arguments)
      c++
    }
  }
  console.only.on = () => {
    console.log = () => {}
  }
  console.only.off = () => {
    console.log = log
  }
} 