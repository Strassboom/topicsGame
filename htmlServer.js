const express = require('express');
const app = express();
const http = require('http');
app.use('/games/topic', require('./games/topic.js')({ app }));
const httpServer = http.createServer(app);
const port = 3002
const ip = Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family==='IPv4' && !i.internal && i.address || []), [])), [])[0]
httpServer.listen(port, ip, () => {
  console.log(`Example app listening at http://${ip}:${port}`)
});