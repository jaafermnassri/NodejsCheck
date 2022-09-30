var http = require("http");

http.createServer(function (request, response) {

    response.writeHead(200, {});
    
   
    response.end( '<h1>Hello Node!!!!</h1>\n');
 }).listen(3000);