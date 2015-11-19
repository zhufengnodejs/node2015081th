var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
/**
 * @param request 请求对象
 * @param response 响应对象
 */
var filename ;
var UPLOAD_PATH ='./upload/';
function start(request,response){
    var url = request.url;//从请求里获取请求url
    if(url =='/'){
        var fileContent = fs.readFileSync('./index.html');//读取文件的内容
        response.write(fileContent);//写入响应
        response.end();//结束响应
    }else if(url =='/upload'){
        var parser = new formidable.IncomingForm();
        //把请求里的元素数据取出来传入回调函数 fileds普通文件字段  files放着所有的文件
        parser.parse(request,function(err,fileds,files){
            if(err){
                response.write('出错啦');
                response.end();
                return;
            }else{
                console.log(files);
                //files.myfile.path
                // type: 'image/jpeg',
                //name: '2015年5月26日redis基础.jpg',
                //从临时目录读取文件的内容
                var filecontent = fs.readFileSync(files.myfile.path);
                //把文件的内容写到当前文件夹下面,文件名叫 files.myfile.name
                fs.writeFileSync(UPLOAD_PATH+files.myfile.name,filecontent);
                response.write(files.myfile.name);
                filename = files.myfile.name;
                response.writeHead(400);//设置响应码
                response.end();
            }

        });
    }else if(url =='/'+filename){
        var fileContent = fs.readFileSync('./'+filename);//读取文件的内容
        response.write(fileContent);//写入响应
        response.end();//结束响应
    }
}
var server = http.createServer(start);

server.listen(1701,'localhost');
