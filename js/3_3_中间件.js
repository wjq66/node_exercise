/*路由get,post就是中间件，中间件讲究顺序，匹配上第一个之后，就不会往下继续匹配。只有next后才能够继续匹配*/
var express = require("express");
var app = express();
app.get("/",function(req,res,next){
	res.send("哈哈，我是页面一");
	console.log("1");
	next();
})
app.get("/",function(req,res){
	console.log("2");
})
app.listen(3000)
