import initInfoBot from './chatbot/init/initInfoBot';
require('dotenv').config('.env');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const FBBotFrameWork = require('fb-bot-framework');
const bot = new FBBotFrameWork({
    page_token: process.env.PAGE_TOKEN,
    verify_token: process.env.VERIFY_TOKEN
});

app.use('/webhook', bot.middleware());

initInfoBot(bot);

//TODO: begin chat bot event

bot.on('message', function(userId, message){
    console.log("error", error);
    bot.sendTextMessage(userId, message);
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
    // bot.sendBubbleMessage(userId, elements);

    var receipt = {
        "recipient_name": "Stephane Crozatier",
        "order_number": "12345678902",
        "currency": "USD",
        "payment_method": "Visa 2345",
        "order_url": "http://petersapparel.parseapp.com/order?order_id=123456",
        "timestamp": "1428444852",
        "elements": [
            {
                "title": "Classic White T-Shirt",
                "subtitle": "100% Soft and Luxurious Cotton",
                "quantity": 2,
                "price": 50,
                "currency": "USD",
                "image_url": "http://petersapparel.parseapp.com/img/whiteshirt.png"
            },
            {
                "title": "Classic Gray T-Shirt",
                "subtitle": "100% Soft and Luxurious Cotton",
                "quantity": 1,
                "price": 25,
                "currency": "USD",
                "image_url": "http://petersapparel.parseapp.com/img/grayshirt.png"
            }
        ],
        "address": {
            "street_1": "1 Hacker Way",
            "street_2": "",
            "city": "Menlo Park",
            "postal_code": "94025",
            "state": "CA",
            "country": "US"
        },
        "summary": {
            "subtotal": 75.00,
            "shipping_cost": 4.95,
            "total_tax": 6.19,
            "total_cost": 56.14
        },
        "adjustments": [
            {
                "name": "New Customer Discount",
                "amount": 20
            },
            {
                "name": "$10 Off Coupon",
                "amount": 10
            }
        ]
    };
    // bot.sendReceiptMessage(userId, receipt);

    var elements = [
        {
            "title": "Classic T-Shirt Collection",
            "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",
            "subtitle": "See all our colors",
            "default_action": {
                "type": "web_url",
                "url": "https://peterssendreceiveapp.ngrok.io/shop_collection",
                "messenger_extensions": true,
                "webview_height_ratio": "tall",
                "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
            },
            "buttons": [
                {
                    "title": "View",
                    "type": "web_url",
                    "url": "https://peterssendreceiveapp.ngrok.io/collection",
                    "messenger_extensions": true,
                    "webview_height_ratio": "tall",
                    "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                }
            ]
        },
        {
            "title": "Classic White T-Shirt",
            "image_url": "https://peterssendreceiveapp.ngrok.io/img/white-t-shirt.png",
            "subtitle": "100% Cotton, 200% Comfortable",
            "default_action": {
                "type": "web_url",
                "url": "https://peterssendreceiveapp.ngrok.io/view?item=100",
                "messenger_extensions": true,
                "webview_height_ratio": "tall",
                "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
            },
            "buttons": [
                {
                    "title": "Shop Now",
                    "type": "web_url",
                    "url": "https://peterssendreceiveapp.ngrok.io/shop?item=100",
                    "messenger_extensions": true,
                    "webview_height_ratio": "tall",
                    "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                }
            ]
        },
        {
            "title": "Classic Blue T-Shirt",
            "image_url": "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
            "subtitle": "100% Cotton, 200% Comfortable",
            "default_action": {
                "type": "web_url",
                "url": "https://peterssendreceiveapp.ngrok.io/view?item=101",
                "messenger_extensions": true,
                "webview_height_ratio": "tall",
                "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
            },
            "buttons": [
                {
                    "title": "Shop Now",
                    "type": "web_url",
                    "url": "https://peterssendreceiveapp.ngrok.io/shop?item=101",
                    "messenger_extensions": true,
                    "webview_height_ratio": "tall",
                    "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                }
            ]
        },
        {
            "title": "Classic Black T-Shirt",
            "image_url": "https://peterssendreceiveapp.ngrok.io/img/black-t-shirt.png",
            "subtitle": "100% Cotton, 200% Comfortable",
            "default_action": {
                "type": "web_url",
                "url": "https://peterssendreceiveapp.ngrok.io/view?item=102",
                "messenger_extensions": true,
                "webview_height_ratio": "tall",
                "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
            },
            "buttons": [
                {
                    "title": "Shop Now",
                    "type": "web_url",
                    "url": "https://peterssendreceiveapp.ngrok.io/shop?item=102",
                    "messenger_extensions": true,
                    "webview_height_ratio": "tall",
                    "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                }
            ]
        }
    ];
    // bot.sendListMessage(userId, elements, (result)=>{
    //     console.log(result);
    // });

    bot.getUserProfile(userId, function (err, profile) {
        console.log(profile);
        bot.sendImageMessage(userId, profile.profile_pic);
    });
});

bot.on('quickreply', (userId, payload) => {

});

bot.on('postback', (userId, payload) => {

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