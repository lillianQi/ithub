const express = require('express');
// 引入router
const router = require('./router');
// 引入art-template
const template = require('art-template')
// 创建web服务
const app = express();
// 配置模板引擎
app.engine('html',require('express-art-template'));
// 在app.js中写 把路由加载到app上
// app.get('/',function(req,res){
//   res.render('index.html')
// })
app.use(router);
// 监听端口
app.listen(3000, () => {
  console.log("请访问:http://localhost:3000")
})