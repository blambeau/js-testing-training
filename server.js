var http = require("http");
var StaticServer = require('node-static').Server;

var PORT = 8001;

var file = new StaticServer(__dirname + '/public');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  });
}).listen(PORT);

console.log("Listening on port " + PORT);