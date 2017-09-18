'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const FBBotFrameWork = require('fb-bot-framework');
const bot = new FBBotFrameWork({
    page_token: process.env.PAGE_TOKEN,
    verify_token: process.env.VERIFY_TOKEN
});

import dbworker from './dbworker';
import controller from './controllers';

app.use('/webhook', bot.middleware());

bot.setGreetingText('Nhập tên giảng viên cần tra cứu');

bot.on('message', function(userId, message){
    console.log(`message from id ${userId}: ${message}`);
    dbworker.searchHumans(message, humans => {
        if (humans.length > 1) {
            controller.askUserChooseHuman(userId, bot, humans);
        } else if (humans.length === 1) {
            controller.showDetailHuman(userId, bot, humans[0])
        } else {
            controller.replyNoResult(userId, message, bot);
        }
    });
});

bot.on('quickreply', (userId, payload) => {
    if (payload.startsWith("DETAIL_HUMAN_")) {
        let id = parseInt(payload.replace('DETAIL_HUMAN_', ''));
        controller.showDetailHuman(userId, bot, id);
    }
});

bot.on('postback', (userId, payload) => {
    if (payload.startsWith("DETAIL_HUMAN_")) {
        let id = parseInt(payload.replace('DETAIL_HUMAN_', ''));
        controller.showDetailHuman(userId, bot, id);
    }
});

app.get('/', function (req, res){
    res.send('hello world')
});

app.set('port', process.env.PORT);
app.use(bodyParser.urlencoded({extended: false}));

const server = require('http').createServer(app);

app.listen(app.get('port'), function(){
    console.log("App is running...");
    console.log("Press Ctrl+C to stop");
});