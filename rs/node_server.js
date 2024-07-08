// const logger = require('/usr/src/app/utils/logger').logger('node_server.js', 'debug');
const express = require("express");
const bodyParser = require("body-parser");
const {calCookie} = require("./res/smr_sz_rsvmp");
const cluster = require('cluster');
const os = require('os');

const app = express();
app.use(bodyParser.urlencoded({extended: true, limit: "1000mb"}));
app.use(bodyParser.json({limit: "1000mb"}));

// 通过 cluster.isMaster 判断当前是否为主进程
if (cluster.isMaster) {
    const numCPUs = os.cpus().length;

    console.log(`Master ${process.pid} is running`);

    // 根据 CPU 核心数创建多个子进程
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // 可根据需要重新启动子进程
        cluster.fork();
    });
} else {
    app.post("/cookie", (req, res) => {
        let {cookie} = calCookie(req.body.html)
        console.log("获取cookie：", cookie)
        res.send({
            "cookie": cookie,
        })
    })

    app.post("/suffix", (req, res) => {
        let {cookie, suffix} = calSuffix(
            req.body.html, req.body.checkPath, req.body.postData
        )
        console.log("获取cookie suffix：", cookie, suffix);
        res.send({
            "cookie": cookie,
            "suffix": suffix
        })
    })

    app.get("/health", (req, res) => {
        res.send({
            'status': 200,
            'message': 'Rs Service is healthy'
        })
    })

    /**************************************启动服务**************************************/
    const port = 5699; // 替换为你希望的端口号
    const server = app.listen(port, () => {
        console.log(`Worker ${cluster.worker.id} is listening on port ${port}`);
        console.log(`瑞数加密服务启动, 监听地址为: http://localhost:${port}`);
    });
}
