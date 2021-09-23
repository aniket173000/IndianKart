var http = require('http');
var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

fs.open('mynewfile2.txt','w',function(err,file){
 if(err)
 throw err;
 console.log('New file created');
})  ;
fs.writeFile('mynewfile3.txt','Hello My name is Aniket',function(err){
if(err)
throw err;
console.log('File got replaced with new content');
});
fs.unlink('mynewfile2.txt',function(err){
if(err)
throw err;
console.log('This file is deleted..');
});
fs.rename('mynewfile1.txt','filename1renamed.txt',function(err){
    if(err)
    throw err;
    console.log('File name Renamed Successfully...');
});
http.createServer(function(req,res){
    fs.readFile('demofile1.html',function(err,data){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);