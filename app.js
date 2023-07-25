const express = require('express');
const app = express();

app.get('/get-ip', (req, res) => {
  // 从请求头中获取客户端的 IP 地址
  const ipAddress = req.ip || req.connection.remoteAddress;
  // 处理 IPv6 地址格式，移除 IPv6 地址的前缀 "::ffff:"
  const formattedIpAddress = ipAddress.replace('::ffff:', '');

  let data = {
    ip: formattedIpAddress,
    equipment: req.headers['sec-ch-ua-platform'],
    browser: req.headers['sec-ch-ua']
  }
  // 将获取到的 IP 地址发送给客户端
  // res.send(`Your IP address is: ${formattedIpAddress}`); // 返回body
  res.json({ ...data })
});

const port = 3000;
// 当服务器成功启动并开始监听指定的端口后，会执行这个回调函数里的代码块。
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
