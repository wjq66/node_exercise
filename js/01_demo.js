var http = require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	res.write("<h1>我是一个小乌龟</h1>");
	res.write("<h2>我是一个小乌龟</h2>");
	console.log("正在运行");
	res.end("结束了")
}).listen(8888,"127.0.0.1");

