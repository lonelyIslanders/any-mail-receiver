const { simpleParser } = require('mailparser');
const SMTPserver = require('smtp-server').SMTPServer;
const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(httpServer);
const cors = require('cors');

app.use(cors());
app.use(express.static('./public'));

io.on('connection', socket => {
    console.log("有靓仔|靓妹已接入！");
    io.emit('msg', '您已成功接入宇宙霹雳无敌超级大爆炸螺旋托马斯回转跳跃上升牛逼的破网站! 👍--> https://npmcow.com')
})

const server = new SMTPserver({
    host: '0.0.0.0',
    port: 25,
    //启用SMTP认证
    authOptional: true,
    onData(stream, session, callback) {
        let emailData = '';
        stream.on('data', (chunk) => {
            emailData += chunk;
        });
        stream.on('end', async () => {
            // 解析邮件内容
            const parsed = await simpleParser(emailData);
            console.log(parsed)
            const date = parsed.date;
            const from = parsed.from.value[0].address;
            const subject = parsed.subject;
            // const attachments = parsed.attachments[0].content;   //一般附件内容，二进制数据
            const mailContent = parsed.html;//邮件正文，更复杂的逻辑需要单独处理，如正则匹配提取验证码和url等
            console.log(mailContent);
            io.emit('mailContent', mailContent)//发送到前端页面
            callback();
        });
    },
});

server.listen(25, () => {
    console.log('SMTP server is listening on port', server.server.address().port);
});

httpServer.listen(4111, () => {
    console.log('HTTP server listening on port 4111')
})
