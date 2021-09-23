var http = require('http');
// http is an in-built module.
var dt = require('./myfirstmodule');
// mufirstmodule : it is an user created module.
// createServer :  it creates the server object.
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.write("The date and time are currently: " + dt.myDateTime() + '\n');// write a response to the client
  
  res.write("We wish that this time will be a great time for you... ENJOY...~!!!")
  res.end();
  // res.end() :  it ends the response.

}).listen(8080);
// 8080 is a port on our server 
