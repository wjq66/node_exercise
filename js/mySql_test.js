var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '960629',
  database : 'test'
});
 
connection.connect();

 
 
/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});*/


/*connection.query(sql,function(err,result){
	if(err){
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}
	console.log('------SELECT-------');
	console.log(result);
	console.log("--------------------");
});
connection.end();
*/


//insert into 向表中插入新数据.
/*var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鸟工具','https://c.runoob.com','23453','CN'];

connection.query(addSql,addSqlParams,function(err,result){
	if(err){
		console.log('[INSERT ERROR] - ',err.message);
		return;
	}
	console.log('------------------------Insert-----------');
	console.log('INSERT ID:',result);
	console.log("------------------------------------------");
}); 

connection.end();*/


//修改数据
/*var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站','https://m.runoob.com',6];

connection.query(modSql,modSqlParams,function(err,result){
	if(err){
		console.log('[UPDATE ERROR] - ',err.message);
		return;
	}
	console.log('---------------UPDATE----------');
	console.log('UPDATE affectedRows',result.affectedRows);
	console.log('-------------------------');
});
connection.end();*/


//删除数据
var delSql = 'DELETE FROM websites where id=7';
connection.query(delSql,function(err,result){
	if(err){
		consolr.log('[DELETE ERROR]-',err.message);
		return;
	}
	console.log('----------DELETE------------');
	console.log(result);
	console.log('DELETE affectedRows',result.affectedRows);
	console.log('------------------');
});
connection.end();
