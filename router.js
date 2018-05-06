//1. 引入express
const express = require('express');
// 2.创建一个路由容器
const router = express.Router();
// 引入控制器模块
// 01.首页模块
const index = require('./controllers/index');
// 02.用户模块
const user = require('./controllers/user');
// 03.话题模块
// 04.评论模块
// 3.创建路由表
// 首页模块
router.get('/', index.showIndex)
      .get('/index.html', index.showIndex);
//用户模块
router.get('/singnin', user.showSignin).
       post('/signin', user.handleSignin).
       get('/signup', user.showSignup).
       post('/signup', user.handleSignup).
       post('/signout', user.handleSignout);
// 4.把路由输出
module.exports = router; 