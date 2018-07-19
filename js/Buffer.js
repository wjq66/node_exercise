/*const buf = Buffer.from("runoob","ascii");

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));
*/

buf = Buffer.alloc(26);
for(var i = 0;i<26;i++){
	buf[i] = i + 97;	
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));
