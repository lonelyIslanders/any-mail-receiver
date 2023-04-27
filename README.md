# 说明
```
npm install
npm run start
```
1.用smtp-server和socket.io等模块搭建的一个初级随机邮箱service，有效支持绝大部分的三方邮箱收件，可以用于一些网站的注册验证，同时还能帮你免去垃圾邮件的干扰，但有些网站对于此类临时一次性邮箱有过滤机制，目前无法解决<br>

2.更多功能需要适配开发，目前适合小范围使用且只返回包含html元素的邮件正文，需要用户手动提取有效信息，有能力者可自行开发

3.需要一个域名，并添加MX记录

4.详细过程在[这里](https://npmcow.com/2023/04/21/da-jian-smtp-fu-wu-ji-you-jian-jie-shou/)发布

5.永久[链接](https://vercel.npmcow.com)
