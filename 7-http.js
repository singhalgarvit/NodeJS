const http=require('http')
const server =http.createServer((req,res)=>{
    res.write("Hello Duniya")
    console.log(req.headers)
    res.end()
})
server.listen(80)