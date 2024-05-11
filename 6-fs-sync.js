const fs=require("fs")

const first=fs.readFileSync('./files/first.txt','utf8')
const second=fs.readFileSync('./files/second.txt','utf8')
console.log(first,second);
console.log("This text will shown after the file read ")/* because it will execute after the previous code completes*/ 

const writeTxt=fs.writeFileSync('./files/third.txt','This is the third text file written by NodeJS ......')
