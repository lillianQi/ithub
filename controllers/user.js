module.exports.showSignin = (req, res) => {
  res.render('login.html');
}

module.exports.handleSignin = (req, res) => {
  res.send('处理登录的请求');
}

module.exports.showSignup = (req, res) => {
  res.render('register.html');
}

module.exports.handleSignup = (req, res) => {
  res.send('处理注册的请求');
}

module.exports.handleSignout = (req, res) => {
  res.send('处理退出请求');
}
