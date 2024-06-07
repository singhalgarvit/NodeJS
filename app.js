const http=require('http')

const app=http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("Home Page")
    }
    else if(req.url == '/about'){
        // for(let i=0;i<10000000000;i++){

        // }
        res.end("About Page")
    }
    else{
        res.end("Error Page")
    }
})
app.listen(3000,'172.16.22.57') 