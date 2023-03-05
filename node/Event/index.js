//Event modul
//node .js a built -in module ,called 'events',
// where you can create-,fire-, and listenn for- your own events.

// example 1- register for the event to be  fired only one tume using once.

//example 2 - create an event emittert instance and register a couple  of callabck 

//example - 3 -registring for the event with callback  parameter


const EventEmitter = require('events');

const event = new EventEmitter();

// example 1- register for the event to be  fired only one tume using once.

event.on("sayMyName",()=>{
    console.log("my name is darshan");
})

//example 2 - create an event emittert instance and register a couple  of callabck 

event.on("sayMyName",()=>{
    console.log("my name is Rashid");
})
event.on("sayMyName",()=>{
    console.log("my name is Nauman");
})
event.on(
    "sayMyName",(sc ,msg)=>{
        console.log('the status is ${sc} and  ${msg} ');
    }
);
//example - 3 -registring for the event with callback  parameter
event.emit('sayMyName',200,'ok');
 
