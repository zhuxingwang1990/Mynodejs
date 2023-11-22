// 服务器端代码
const express = require('express');
const http = require('http');

const app = express();

app.get('/ai-events', (req, res) => {
  // 设置响应头，表明使用SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 模拟AI推送数据
  var p = /\W/;
  var aiData = "你好，很高兴认识，我是人工智能机器人，天猫精灵。dddd".split(p);
  console.log(aiData);
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < aiData.length) {
      res.write(`data: ${aiData[index]}\n\n`);
      index++;
    } else {
      clearInterval(intervalId);
      res.end();
    }
  }, 2000);


  // 当客户端断开连接时，停止推送消息
  req.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId);
    res.end();
  });
});

app.get('/events', (req, res) => {
  // 设置响应头，表明使用SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 每隔一段时间向客户端推送一条消息
  setInterval(() => {
    res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
  }, 1000);

  // 当客户端断开连接时，停止推送消息
  req.on('close', () => {
    console.log('Client disconnected');
    res.end();
  });
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});