const fs=require('fs')
fs.readFile('./files/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
})
console.log("This text will shown before the file text")


/*
fs module is used to read the external files .

it has two types :
1)Synchronous 
2)Asynchronous

readFile and writeFile are asynchronous function for reading and writing the file respectively 
Asynchronous simply state for non-blocking 
It does not block the next line for the previous code , whereas it continue without blocking the file 
and show the filecontent when it is ready 

on the other hand in synchronous read and write the js runs line by line and stop the execution of program
to wait for completion of that program (in our case it is file reading )and execute next line when previous one completes

*/
