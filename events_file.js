let EventEmitter  = require('events');  //import "events" module in a eventEmitter variable

let customEvent = new EventEmitter()   //create a new instance of eventEmitter() class and put it inside a customEvent variable

//We listen for the event first and the create it, it shoulb be placed in the said order
//customEvent.on() is for listening the event that is created and sent 
customEvent.on('response', ()=>{
    console.log('1. directory opened...')
})

customEvent.on('response', ()=>{
    console.log('2. Second listener is listening and reading directory opened...')
})
customEvent.on('response', ()=>{
    console.log('3. Listening to the response through the event listener')
})

customEvent.on('response_name', (a, b)=>{
    console.log(`My name is ${a} and I am ${b} years old`)
    // return `My name is ${a} and I am ${b} years old as of now`
})
//customEvent.event creation 
customEvent.emit('response')
customEvent.emit('response_name', 'Adarsh', 24)


// module.exports = customEvent;   //events are globals they need not to be exported 