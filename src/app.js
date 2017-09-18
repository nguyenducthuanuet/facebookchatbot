const express = require('express');
require('dotenv').config({path:'.env'});
const bodyParser = require('body-parser');
import page_token from './config/page_token';
const FBBotFrameWork = require('fb-bot-framework');
const app = express();
const bot = new FBBotFrameWork(page_token);
import dbworker from './dbworker';


//todo: Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());

//todo: Setup listener for incoming messages
bot.on('message', function(userId, message){
    console.log(`message from id ${userId}: ${message}`);
    dbworker.searchHuman(message, humans => {
        if (humans.length) {
            let response = humans.map(human => {
                let title = `${human.academic_title ? human.academic_title : ''} ${human.name}`;
                console.log(title);
                return {
                    title: title,
                    type: 'postback',
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
        } else {
            bot.sendTextMessage(userId, `Không tìm thấy ai tên ${message}`)
        }
    });
});

bot.on('postback', function(userId, payload) {
    console.log(`postback from id ${userId}: ${payload}`);
    if (payload.startsWith('DETAIL_HUMAN_')) {
        let id = parseInt(payload.replace('DETAIL_HUMAN_', ''));
        dbworker.detallHuman(id, function(details) {
            if (details.length) {
                let response = `${details[0].academic_title ? details[0].academic_title : ''} ${details[0].name}`;
                if (details[0].department_name) {
                    response += '\n' + details.map(detail => `${detail.position ? detail.position : 'làm việc'} tại ${detail.department_name}`).join('\n')
                }
                return bot.sendTextMessage(userId, response);
            }
        });
    }
});

//todo: Test server in active
app.get('/', function (req, res){
    res.send('hello world')
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