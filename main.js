
var express = require('express');
var fs = require('fs');
// 初始化
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/banner', (req, res) => {
      res.sendFile(__dirname + '/json/banner.json');
})
app.get('/zuixinshangjia', (req, res) => {
    res.sendFile(__dirname + "/json/zuixinshangjia.json");
})

// app.get('/zuixinshangjia', (req, res) => {
//      fs.readFile("./json/zuixinshangjia.json", (err, data) =>{
//          var phoneList = JSON.parse(data).result;

//          //处理分页（需要知道显示第几页pageNo和每页显示的条目pageSize）
//         var pageNum = parseInt(req.query.pageNum);
//         var pageSize = 5;
//         var phoneList2 = phoneList.good_list.slice( pageNum * pageSize, (pageNum + 1) * pageSize);
//         res.send({page_count:phoneList.good_list.length, phoneList: phoneList2})
//      });
// });


app.get('/rexiaojixing', (req, res) => {
      res.sendFile(__dirname + '/json/hotsale.json');
})
   
app.get('/bannerxia', (req, res) => {
    // console.log(req.query);
    // 发js对象数据转换成json
    // res.send(req.query);
    // res.sendFile();
    // __dirname 获取项目的根路径（绝对）
    //  console.log(__dirname + '/car.json');
    res.sendFile(__dirname + '/json/bannerxia.json');
})
 



// 监听端口
app.listen(8888, function () {
    console.log('服务启动成功');
});






