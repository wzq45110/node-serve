const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.static('public'));
// 通过跨域里面的cors跨域
// 跨域中间件
app.use(function(req, res, next) {
        // 设置cors跨域
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    })
    // 解跨域后端 方法 多种  其中一种
    // var cors = require('cors');
    // app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodemysql"
})
db.connect((err) => {
        if (err) throw err;
        console.log('链接成功')
    })
    // 静态资源服务图片接口
app.get('/public/images/*', function(req, res) {
        res.sendFile(__dirname + "/" + req.url);
        console.log("Request for " + req.url + " received.");
    })
    // 创建数据库
app.get("/creatdb", (req, res) => {
        let sql = "CREATE DATABASE nodemysql";
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result);
                res.send("创建数据库成功")
            }
        })
    })
    // 创建表
app.get("/createposttable", (req, res) => {
        let sql = "CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255), PRIMARY KEY(ID))"
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send("posts表创建成功....")
            }
        })
    })
    // 在表中插入内容
app.get("/addpost1", (req, res) => {
        let post = { title: "post one", body: "easth" };
        let sql = "INSERT INTO posts SET ?";
        db.query(sql, post, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send("post1表中数据已经插入")
            }
        })

    })
    // 获取表中的数据
app.get("/getposts", (req, res) => {
        let sql = "SELECT * FROM posts";
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    code: '1111',
                    data: [],
                    msg: '获取失败'
                })
            } else {
                console.log(result);
                // res.send("查询成功")
                let rst = {
                    code: '0000',
                    data: result,
                    msg: '获取成功'
                }
                res.json(rst)
            }
        })
    })
    // 查询单条内容
app.get("/getposts/:id", (req, res) => {
        let sql = `SELECT * FROM  posts WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.json(result)
            }
        })
    })
    // 更新数据
app.get("/updatepost/:id", (req, res) => {
        let newTitle = "000001";
        let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(`更新${req.params.id}数据成功`)
            }
        })
    })
    // 删除单条数据
app.get("/deletepost/:id", (req, res) => {
        let sql = `DELETE FROM posts  WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(`删除成功`)
            }
        })
    })
    // 开服务
app.listen(3000, () => {
    console.log("服务开启在3000端口。。。。。")
})