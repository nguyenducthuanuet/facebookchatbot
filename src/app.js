const express = require('express');
require('dotenv').config({path:'.env'});
const logger = require('morgan');
const bodyParser = require('body-parser');
import page_token from './config/page_token';
const FBBotFrameWork = require('fb-bot-framework');

var app = express();

var bot = new FBBotFrameWork(page_token);


//todo: Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());

//todo: Setup listener for incoming messages
bot.on('message', function(userId, message){
    console.log("message from id ", userId);
    // bot.sendImageMessage(userId, 'https://scontent.fhan5-2.fna.fbcdn.net/v/t35.0-12/21767361_2011415915794628_148647750_o.png?oh=8167ab094538c908818f674d28b186cc&oe=59BE0D4B', 'REGULAR');
    bot.sendTextMessage(userId, message);
    // var text = "What do you want to do next?";
    var buttons = [
        {
            "type": "web_url",
            "url": "https://petersapparel.parseapp.com",
            "title": "Show Website"
        },
        {
            "type": "postback",
            "title": "Start Chatting",
            "payload": "USER_DEFINED_PAYLOAD"
        }
    ];
    // bot.sendButtonMessage(userId, text, buttons);
    var elements = [
        {
            "title": "Classic White T-Shirt",
            "image_url": "http://petersapparel.parseapp.com/img/item100-thumb.png",
            "subtitle": "Soft white cotton t-shirt is back in style",
            "buttons": [
                {
                    "type": "web_url",
                    "url": "https://petersapparel.parseapp.com/view_item?item_id=100",
                    "title": "View Item"
                },
                {
                    "type": "web_url",
                    "url": "https://petersapparel.parseapp.com/buy_item?item_id=100",
                    "title": "Buy Item"
                },
                {
                    "type": "postback",
                    "title": "Bookmark Item",
                    "payload": "USER_DEFINED_PAYLOAD_FOR_ITEM100"
                }
            ]
        },
        {
            "title": "Classic Grey T-Shirt",
            "image_url": "http://petersapparel.parseapp.com/img/item101-thumb.png",
            "subtitle": "Soft gray cotton t-shirt is back in style",
            "buttons": [
                {
                    "type": "web_url",
                    "url": "https://petersapparel.parseapp.com/view_item?item_id=101",
                    "title": "View Item"
                },
                {
                    "type": "web_url",
                    "url": "https://petersapparel.parseapp.com/buy_item?item_id=101",
                    "title": "Buy Item"
                },
                {
                    "type": "postback",
                    "title": "Bookmark Item",
                    "payload": "USER_DEFINED_PAYLOAD_FOR_ITEM101"
                }
            ]
        }
    ];

    bot.sendGenericMessage(userId, elements);
});

//todo: Test server in active
app.get('/', function (req, res){
    res.send('Welcome to Facebook Web Service api!');
});
//TODO: set port to run server
app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: false}));

var server = require('http').createServer(app);

//TODO: run server
app.listen(app.get('port'), function(){
    console.log("App is running...");
    console.log("Press Ctrl+C to stop");
});