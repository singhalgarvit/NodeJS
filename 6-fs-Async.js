const fs=require('fs')
fs.readFile('./files/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
})
console.log("sdf")
