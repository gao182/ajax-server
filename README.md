##原生js实现ajax
####1. `var xmlHttp = new XMLHttpRequest()`  --声明一个XMLHttpRequest的实例对象
####2. `xmlHttp.open(type,url,true)`  --设置请求的类型（例如GET/POST），网址，是否异步
####3. `xmlHttp.onload = function(){}`  --当异步请求加载完成后，执行函数
####4. `xmlHttp.onreadystatechange = function(){}`  --当客户端与服务端交互，握手状态发生改变时触发
>1. `xmlHttp.readystate` 握手时的状态码 返回2,3,4,然后成功，xmlHttp.onload是在状态码为4后发生
>一些请求加载完成后的属性方法：
>1. `xmlHttp.status` 请求返回的状态码
>2. `xmlHttp.responseText` 请求返回的数据内容
####5. `xmlHttp.send（dataurl）`  --发送请求，dataurl是当请求为post时，传入服务器的请求条件信息


##node.js创建一个服务器
####1. require('http')  --加载http模块
####2. createServer( function( request, response){})   --用来创建服务器,且必须将要执行的代码放入到回调函数内
####3. listen(8080);   --启动服务器，并创建端口号,端口号可以自己设定
**需注意的是，require，createServer，listen写法是用`.`依次连接,例如：**
```
var http = require('http');
http.createServer( function( request, response){
	执行的代码......
	}).listen(9000);
```

###在createServer函数内，我们可以写入以下代码：

1. `response.writeHead(404, 'not found')`  -- 返回响应头，且响应头的状态码为`404`，描述为`not found`
	`response.writeHead(200, 'ok')`     -- 返回响应头，且响应头的状态码为`200`，描述为`ok`
2. `response.write('\<h1>404 Not found<\/h1>')`  -- 返回响应体，并在页面内渲染大标题，内容为`404 Not found`
	response.write(fs.readFileSync(filePath))  -- 返回响应体，并在页面内渲染文件内容
	`fs.readFileSync(filePath)`   --`fs.readFileSync()`是同步读取文件内容，该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
3. `response.end()`  --结束响应

**要注意的是，响应是服务端发给客户端的，最后必须加上`.end()`来结束响应**

4. `var filePath = path.join(\__dirname, request.url)`  --将括号内的地址，全部组合成文件本地所在的绝对地址,该方法属于path模块，使用前需要引入path模块（var fs= require(“path”) ）
5. `\__dirname`    --表示当前运行的文件所在路径
6. `fs.readFile(filePath, function(err, content){})`   --读取路径地址的文件，并执行后面的函数，且该函数有两个值，文件异常和文件内容
7. `var urlObj = url.parse(request.url)`   --取请求的URL的信息集合