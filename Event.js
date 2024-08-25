// // function fun1(){
// //     process.nextTick(()=>console.log('For Fun1()')) //  console.log('For Fun1()') is wrapped in a callback function that is passed to process.nextTick(). This means that as soon as the current JavaScript stack is clear, the event loop will pick up the callback and execute it, outputting "For Fun1()" to the console.
// //     setTimeout(()=>console.log('This is for fun1() makes it asynchrounous'),2000)   // this will work asynchronously like at the last 
// //     setImmediate(()=>console.log('This is a set immediate'))
// // }

// // function fun2(){
// //     console.log('This is function 2');
    
// // }

// // function fun3(){
// //     console.log('This is function 3');
// // }

// // fun1()
// // fun2()
// // fun3()


// setTimeout(() =>{
//     console.log('This is a set TimeOut !!!');
// },3000)

// const fs = require('fs')
// fs.readFile(__filename,() =>{
//     console.log('I am file')
// })

// process.nextTick(()=> console.log('I am a process'))     // this is all a callback function
// // Promise.resolve().then(()=> console.log('This is a Promise')) // this is a micro task firstly execute



const EventEmitter = require('events')
const emitter = new EventEmitter()   // instance created of emitter

emitter.on('checkPage',(data,status)=> {
    console.log('Event Occur',data.message, status)   // event listener 
})

emitter.emit('checkPage',{message: "Hello Aryat"},100)   // event emitted , of the callback specific mentioned 