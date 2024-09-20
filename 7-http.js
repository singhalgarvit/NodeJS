const http=require('http')
const server =http.createServer((req,res)=>{
    if(req.url==='/' && req.method =="GET"){
        res.write("Hello Duniya")
    }
    else if(req.url=='/about'){
        res.write("this is about Duniya")
    }
    else{
        res.write("OOPS the page You are looking for is not found ")
    }
    res.end()
})
server.listen(80,'127.0.0.1')


// http module is used to create server in NodeJS
// http module has many methods and functions . Let's explore them ......