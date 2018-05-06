const express = require('express');
// 引入router
const router = require('./router');
// 创建web服务
const app = express();
// 在app.js中写 把路由加载到app上
// app.get('/',function(req,res){
//   res.render('index.html')
// })
app.use(router);
// 监听端口
app.listen(3000, () => {
  console.log("请访问:http://localhost:3000")
})