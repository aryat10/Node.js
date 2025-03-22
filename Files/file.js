const fs = require("fs")

fs.writeFileSync('./test.txt',"This is an example ") // this is a synchronous way of handling file 
fs.appendFileSync('./test.txt',`${Date.now()} 👆🏼\n`)


const res = fs.readFileSync('./contact.txt','utf-8')
console.log(res);


console.log(fs.statSync('./contact.txt').isFile())