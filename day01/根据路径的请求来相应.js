let http = require("http");
let server = http.createServer();
server.on("request",(request,response)=>{
    console.log(request.url);
    let {url} = request;
    if(url==='/'){
        let arr={
            name:"caixiacoa",
            food:["apple","banane","watermalen"]
        }
        response.end(JSON.stringify(arr));
    }else if(url==='/login'){
        response.end("login-------page")
    }else{
        response.end("404page not found");
    }
})
server.listen("80",()=>{
    console.log('服务器开启成功')
    }
)