
var express = require("express");

var app = express();
/*静态服务，缓存非常好*/
app.use(express.static("./../aaa"));

app.listen(3000);
