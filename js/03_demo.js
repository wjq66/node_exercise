var http = require("http");
http.createServer(function(req,res){
	var userUrl = req.url;
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	if(userUrl.substr(0,9) == '/student/'){
		var studentid = userUrl.substr(9);
		console.log(studentid);
		if(/^\d{10}$/.test(studentid)){
			res.end("您要查询的学生信息，id为"+studentid)
		}else{
			res.end("学生学号位数不对");
		}
	}else if(userUrl.substr(0,9) == '/teacher/'){
		var teacherid = userUrl.substr(9);
		console.log(teacherid);
		if(/^\d{6}$/.test(teacherid)){
			res.end("您要查询的老师信息，id为"+teacherid)
		}else{
			res.end("老师工号位数不对");
		}
	}
}).listen(8888,"127.0.0.1");
