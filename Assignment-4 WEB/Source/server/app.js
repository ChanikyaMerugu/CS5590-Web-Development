var http = require('http');

var fhchanu = require('finalhandler');
var sschanu = require('serve-static');

var srve = sschanu('./dist');

var srvr = http.createServer(function(request, res) {
  var done = fhchanu(request, res);
  if(request.url.split('?')[2]=='/')
    request.url=['html/index.html', request.url.split('?')[1] || ''].join('?');
  srve(request, res, done);
});

srvr.listen(80, function(){
  console.log('server started in port 80');
});
