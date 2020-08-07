/*上传改名，使用web/2_3_form测试。上传到文件夹uploads里面并改名*/

var http = require("http");
/*文件上传插件*/
var formidable = require("formidable");
var util = require("util");
var path = require("path");
var fs = require("fs");

var server = http.createServer(function(req,res){
	if(req.url == '/dopost' && req.method.toLowerCase() == 'post'){
		var form = new formidable.IncomingForm();
		/*路径要写对*/
		form.uploadDir = "uploads";
		form.parse(req,function(err,fields,files){
			if(err){
				throw err; 
			}
			console.log(util.inspect({fields:fields,files:files}));
			
			/*执行改名*/
			var ran = parseInt(Math.random() * 8999+1000);
			var extname = path.extname(files.tupian.name);
			
			var oldpath = __dirname + "/" + files.tupian.path;
			var newpath = __dirname + "/uploads/" + ran + extname;
			
			fs.rename(oldpath,newpath,function(){
				if(err){
					console.log("shibai")
				}
				res.writeHead(200,{'content-type':'text/plain;charset:utf8'});
				res.end("成功");
			})
			
			
		})
	}
})
server.listen(8080,"127.0.0.1");
