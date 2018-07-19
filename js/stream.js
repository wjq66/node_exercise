//读取数据流

/*var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data",function(chunk){
	data+=chunk;
});

//读取文件
readerStream.on('end',function(){
   console.log(data);
});

readerStream.on("error",function(err){
	console.log(err.stack);
});
console.log("程序执行完毕");*/

//写入流

/*var fs = require("fs");
var data = "财年教程官网地值：www.runoob.com";

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data,"UTF8");

writerStream.end();

writerStream.on("finish",function(){
	console.log("写入完成");
});
writerStream.on("error",function(err){
	console.log(err.stack);
});

console.log("程序执行完毕");
*/


//管道流

var fs = require("fs");
var readerStream = fs.createReadStream("./input.txt");
var writeStream = fs.createWriteStream("./output.txt");

readerStream.pipe(writeStream);
console.log("程序执行完毕");
