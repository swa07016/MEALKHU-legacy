const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var iconv  = require('iconv-lite');

const app = express();
const port = process.env.PORT || 5000;

const dataBuffer = fs.readFileSync('json_datas.json')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', (req, res) => {
    res.send('Hello skrrrr!');
});


app.get('/api/datas', (req, res) => {
    iconv.extendNodeEncodings();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(iconv.decode(dataBuffer, 'EUC-KR').toString());
})

app.listen(port, () => console.log(`Listening on port ${port}`));