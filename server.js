const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mysql = require('mysql');
const iconv  = require('iconv-lite');

const bcrypt = require('bcrypt');                                                    
const saltRounds = 10;   

const app = express();
const port = process.env.PORT || 5000;

const dataBuffer = fs.readFileSync('json_datas.json')


// db connection
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send('Hello skrrrr!');
});

// datas 전달
app.get('/api/datas', (req, res) => {
    iconv.extendNodeEncodings();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(iconv.decode(dataBuffer, 'EUC-KR').toString());
})

// signup
app.post('/api/signup', (req, res) => {
    let sql = 'INSERT INTO USER (name, pw) VALUES(?, ?)';
    let plainPassword = req.body.password;
    bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
        
        const params = [req.body.username, hash];
        connection.query(sql, params, (err, rows, fields) => {
            if(err){ 
                console.log(err);
                res.send({
                    "code":400,
                    "message": "error"
                })
            }
            else {
                res.send({
                    "code":200,
                    "message": "success"
                })
            }
        })
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));