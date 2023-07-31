const express = require('express');
const ip2region = require('ip2region').default;
const query = new ip2region();
const app = express();

app.get('/get-ip', (req, res) => {
  // 从请求头中获取客户端的 IP 地址，nginx代理转发
  const xForwardedFor = req.headers['x-forwarded-for'];
  const ipAddress = xForwardedFor ? xForwardedFor.split(',')[0] : req.connection.remoteAddress;
  
  // 处理 IPv6 地址格式，移除 IPv6 地址的前缀 "::ffff:"
  const formattedIpAddress = ipAddress.replace('::ffff:', '');

  const address = query.search(formattedIpAddress);
  let data = {
    ip: formattedIpAddress,
    ...address,
    equipment: req.headers['sec-ch-ua-platform'],
    browser: req.headers['sec-ch-ua']
  }
  // 将获取到的 IP 地址发送给客户端
  // res.send(`Your IP address is: ${formattedIpAddress}`); // 返回body
  res.json({  ...data })
});

const port = 7819;
// 当服务器成功启动并开始监听指定的端口后，会执行这个回调函数里的代码块。
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
