//启动一个简单的服务器--尝试使用nodejs的api
let http = require("http");
var server = http.createServer();
server.on("request",()=>{
    console.log("接受到了请求")
})
server.listen(3000,()=>{
    console.log("服务器启动成功");
})