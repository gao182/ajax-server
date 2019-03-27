# node-server

node.js创建一个服务器
1. require('http')  --加载http模块
2. createServer( function( request, response){})   --用来创建服务器,且必须将要执行的代码放入到回调函数内
3. listen(8080);   --启动服务器，并创建端口号,端口号可以自己设定
**需注意的是，require，createServer，listen写法是用`.`依次连接,例如：**
```
var http = require('http');
http.createServer( function( request, response){
	执行的代码......
	}).listen(9000);
```

在createServer函数内，我们可以写入以下代码：

1. response.writeHead(404, 'not found')  -- 返回响应头，且响应头的状态码为`404`，描述为`not found`
	response.writeHead(202, 'ok')     -- 返回响应头，且响应头的状态码为`200`，描述为`ok`
2. response.write('<h1>404 Not found</h1>')  -- 返回响应体，并在页面内渲染大标题，内容为`404 Not found`
	response.write(fs.readFileSync(filePath))  -- 返回响应体，并在页面内渲染文件内容
	fs.readFileSync(filePath)   --fs.readFileSync()是同步读取文件内容，该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
3. response.end()  --结束响应

**要注意的是，响应是服务端发给客户端的，最后必须加上`.end()`来结束响应**

4. var filePath = path.join(\__dirname, request.url)  --将括号内的地址，全部组合成文件本地所在的绝对地址,该方法属于path模块，使用前需要引入path模块（var fs= require(“path”) ）
5. \__dirname    --表示当前运行的文件所在路径
6. fs.readFile(filePath, function(err, content){})   --读取路径地址的文件，并执行后面的函数，且该函数有两个值，文件异常和文件内容
7. var urlObj = url.parse(request.url)   --取请求的URL的信息集合