const express = require('express');
require('dotenv').config({path:'.env'});
const bodyParser = require('body-parser');
const page_token= require('./config/page_token');
const FBBotFrameWork = require('fb-bot-framework');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uet-contacts'
});
const bot = new FBBotFrameWork(page_token);


//todo: Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());

//todo: Setup listener for incoming messages
bot.on('message', function(userId, message){
    console.log(`message from id ${userId}: ${message}`);
    // bot.sendTextMessage(userId, `Bạn vừa nhắn ${message}`);
    connection.query(`SELECT * FROM humans WHERE name LIKE '%${message}%'`, function(err, rows, fields) {
        if (rows.length === 0) {
            bot.sendTextMessage(userId, `Không tìm thấy ai tên ${message}`)
        } else {
            let response = rows.map(human => {
                return {
                    title: human.name,
                    buttons: [
                        {
                            type: 'postback',
                            title: 'Chi tiết',
                            payload: `DETAIL_HUMAN_${human.id}`
                        }
                    ]
                }
            });
            bot.sendGenericMessage(userId, response);
        }
    });
});

bot.on('postback', function(userId, payload) {
    if (payload.startsWith('DETAIL_HUMAN_')) {
        let id = parseInt(payload.replace('DETAIL_HUMAN_', ''));
        bot.sendTextMessage(userId, `Bạn vừa chọn id=${id}`);
    }
});

//todo: Test server in active
app.get('/', function (req, res){
    // res.send("hello world");
    let message = 'Hiếu'.toLowerCase();
    connection.query(`SELECT * FROM humans WHERE name LIKE '%${message}%'`, function(err, rows, fields) {
        if (err) throw err;
        res.send(`${rows.length} results`);
    });
});

//TODO: set port to run server
app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: false}));

const server = require('http').createServer(app);

//TODO: run server
app.listen(app.get('port'), function(){
    console.log("App is running...");
    console.log("Press Ctrl+C to stop");
});