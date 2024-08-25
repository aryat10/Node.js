function hello() {
    console.log("Hello Aryat")       // this is rendering on the local machine which we are working on right now , kind of a server 🦐
}

hello()



require("./add")
console.log("Nothing found")          // Here we can see a Local Module has been created using another file which act as a Core Module for it 

const os = require('os')
const imp = os.freemem()
const fmp = os.homedir()
const ump = os.userInfo()

console.log(imp);
console.log(fmp);
console.log(ump);

const path = require('path')
console.log(__filename);
console.log(path.extname(__filename))

console.log(path.join('/hello','/hello','file.txt'))       // With this we can particualarly join a path in a file 

const fs = require('fs')
fs.readFile('file.txt', 'utf-8', (err,data)=>{
    if(err){
        console.log(err)                           // This is the Assynchronous way 
        return
    }
    console.log(data)
    
})


const fileStore = fs.readFileSync('file.txt','utf-8')    // btw utf-8 is a character set without this the terminal will show a buffer 
console.log(fileStore);       // This is the Synchronous way 

fs.writeFile('Prove.txt','Prove yourself Aryat !!! ',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('File executed succesfully')
})


fs.writeFileSync('ProveAgain.txt','Prove again mfs !!!','utf-8')
console.log("Proved it again 🔥")


