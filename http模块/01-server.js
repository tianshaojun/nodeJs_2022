var http = require("http");

//创建服务器
http.createServer((req, res) => {
    //req 接受浏览器传的参数
    //res 返回渲染的内容

    // res.write("hello world");
    // res.end("[1,2,3]");
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
    res.write(`
       <html>
          <b>hello world</b>
          <div>大家好</div>
       </html>
    `)
    res.end()
}).listen(3000, () => {
    console.log('server start');
})