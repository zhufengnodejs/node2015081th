var http = require('http');
/**
 * @param request 请求对象
 * @param response 响应对象
 */
function start(request,response){
    var url = request.url;//从请求里获取请求url
    if(url =='/hello'){
        response.write('hello');//向客户端说话
    }else if(url =='/world'){
        response.write('world');
    }
    response.end();//结束响应，
}
var server = http.createServer(start);

server.listen(1701,'localhost');
