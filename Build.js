const os = require('os')
const op = os.freemem()
const pt = os.totalmem()
const us = os.userInfo()
const ot = os.platform
console.log(op,pt)
console.log(us);
console.log(ot);


const path = require('path')
console.log(__filename)   // this is the child file of the parent directory inide of it 
console.log(__dirname)       // this act as a parent directory
console.log(path.basename(__filename))
console.log(path.basename(__dirname))


const fs = require('fs')          // this fs is the file system 
fs.readFile("file.txt", "utf-8", (err,data)=>{
    if(err)
        console.log(err)
    console.log(data,'this is the assynchronous way')             // this is an assynchronous way
})

const file = fs.readFileSync('file.txt','utf-8')
console.log(file,'this is synchronous way')



fs.writeFile('aryat.txt','Sup Aryat',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('File done !')
})

