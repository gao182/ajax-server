//1.加载http,path,url,fs等模块
var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

//2. 创建服务器
var server = http.createServer( function( request, response){
	//1.取请求的URL信息集合
	var urlObj = url.parse(request.url);

	//2.判断url--如果在8080端口
	if (urlObj.path == '/') {
		//1. 让url地址就直接变为sample文件夹的test.html地址
		urlObj.path += 'sample/test.html';
	}

	//3.组合成文件本地所在的绝对地址
	var filePath = path.join( __dirname, urlObj.path);

	//3. 读取该地址的文件
	fs.readFile(filePath, function(err, content){
		//判断：如果文件异常
		if (err) {
			response.writeHead(404, 'not found');
			response.end('<h1>404 Not found</h1>');
		}
		else {
			response.writeHead(200, 'login');
			response.end(content);
		}
	})
});
//3. 启动服务器，并创建端口号
server.listen(8080);