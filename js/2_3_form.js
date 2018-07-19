

var http = require("http");
var formidable = require("formidable");
var util = require("util");

var server = http.createServer(function(req,res){
	if(req.url == '/dopost' && req.method.toLowerCase() == 'post'){
		var form = new formidable.IncomingForm();
		/*路径要写对*/
		form.uploadDir = "../uploads";
		form.parse(req,function(err,fields,files){
			if(err){
				throw err; 
			}
			console.log(fields);
			console.log(files);
			console.log(util.inspect({fields:fields,files:files}));
			
			res.writeHead(200,{'content-type':'text/plain;charset:utf8'});
			res.end("成功");
		})
	}
})
server.listen(8080,"127.0.0.1");
