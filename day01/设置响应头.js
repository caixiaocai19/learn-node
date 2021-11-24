let http = require("http");
let server=http.createServer();
server.on("request",(req,res)=>{
    res.setHeader("Content-Type","text/plain;charset=utf-8");//设置响应头，告诉浏览器解析的编码规则，这样不会中文乱码
    res.end("我是中文懂吗？")
})
server.listen("8000",function(){
    console.log("服务已经开启了");
})