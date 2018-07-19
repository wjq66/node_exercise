/*express框架式后台node的框架，*/
var express = require("express");

var  app = express();

app.get("/",function(req,res){
	res.send("niha");
});
app.get("/haha",function(req,res){
	res.send("这是哈哈页面")
})
app.get(/^\/student\/([\d]{10})$/,function(req,res){
	res.send("学生信息，学号"+req.params[0]);
});
app.get("/teacher/:gonghao",function(req,res){
	res.send("老师工号："+req.params["gonghao"]);
})
app.listen(3000);
