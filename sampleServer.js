let http = require("http");
let fs = require("fs")
console.log("Starting Server")

http
.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        console.log(req.url);
        if (err == null){
            res.writeHead(200,{
                'content-Type':"text/html",
                "X-Auth-Token":"fsfw-efedd-sfdsgewf-eqwed"
            });
            res.write(data);
            return res.end();
        }
        else
        res.write('error while reading file');
    return res.end();
    })
})
.listen(8080);