const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mysql = require("mysql");
const iconv = require("iconv-lite");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const port = process.env.PORT || 5000;

const dataBuffer = fs.readFileSync("json_datas.json");

const jwt_key = fs.readFileSync("./jwt_key.json");
const jwt_secret_key = JSON.parse(jwt_key);

// db connection
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send("Hello skrrrr!");
});

// datas 전달
app.get("/api/datas", (req, res) => {
  iconv.extendNodeEncodings();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(iconv.decode(dataBuffer, "EUC-KR").toString());
});

// ???? ???? ??
// signup
app.post("/api/signup", (req, res) => {
  let sql = "INSERT INTO USER (name, pw) VALUES(?, ?)";
  let plainPassword = req.body.password;
  bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
    const params = [req.body.username, hash];
    connection.query(sql, params, (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.send({
          code: 400,
          message: "error",
        });
      } else {
        res.send({
          code: 200,
          message: "success",
        });
      }
    });
  });
});

// ????
// res.send({
//     "code":200,
//     "message": "success"
// })
// ????
// jwt_secret_key.value
// signin
app.post("/api/signin", (req, res) => {
  
  const name = req.body.username;
  let sql = `SELECT name, pw FROM USER WHERE name='${req.body.username}';`;
  let sql_usercheck = `SELECT * FROM USER WHERE name='${req.body.username}';`;
 
  connection.query(sql_usercheck, (err, rows, fields) => {
    if(rows.length === 0) {
      flag = false;
      // console.log(flag);
      return res.send({
        code: 400,
        message: "user does not exist",
      });
    } else {

      connection.query(sql, (err, rows, fields) => {
        bcrypt.compare(req.body.password, rows[0].pw, function (err, result){
            const pw = rows[0].pw;
            if(result) {
                
                try {
                    const token = jwt.sign(
                      {
                        name,
                        pw,
                      },
                      jwt_secret_key.value,
                      {
                        expiresIn: "60m",
                        issuer: "admin",
                      }
                    );
            
                    return res.json({
                        code: 200,
                        message: 'Token issue',
                        token,
                      });

                  } catch (error) {
                    console.error(error);
                    return res.status(500).json({
                        code: 500,
                        message: 'server error',
                      });

                  }

            } else {
                return res.json({
                    code: 400,
                    message: "invalid password",
                });
            }
        })
    
    })
    }
  })
});


app.listen(port, () => console.log(`Listening on port ${port}`));
