var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	var queryObj = url.parse(req.url,true).query;
	var name = queryObj.name;
	var age = queryObj.age;
	var sex = queryObj.sex;
	
	res.end("服务器收到了请求"+name+age+sex);
}).listen(8888,"127.0.0.1");
