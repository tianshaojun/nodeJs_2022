var http = require("http");
var moduleRenderHTML = require('./module/renderHTML');
var moduleRenderStatus = require('./module/renderStatus');

//创建服务器
var server = http.createServer()

server.on("request", (req, res) => {
    //req 接受浏览器传的参数
    //res 返回渲染的内容

    // res.write("hello world");
    // res.end("[1,2,3]");
    if (req.url === "/favicon.ico") {
        return
    }
    console.log(req.url)
    res.writeHead(moduleRenderStatus.renderStatus(req.url), {
        "Content-Type": "text/html;charset=utf-8"
    })
    res.write(moduleRenderHTML.renderHTML(req.url))
    res.end()
})

server.listen(3000, () => {
    console.log('server start');
})


