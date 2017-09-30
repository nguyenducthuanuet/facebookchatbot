'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import app_config from './config/app_config';

const FBBotFramework = require('fb-bot-framework');
import bot_config from './config/bot_config';
const bot = new FBBotFramework(bot_config);
import bot_setup from './controllers/bot_setup';
import on_message from './controllers/on_message';
import on_postback from './controllers/on_postback';
import on_quickreply from './controllers/on_quickreply';

app.use('/webhook', bot.middleware());

bot_setup(bot);
bot.on('message', (userId, message) => on_message(bot, userId, message));
bot.on('postback', (userId, payload) => on_postback(bot, userId, payload));
bot.on('quickreply', (userId, payload) => on_quickreply(bot, userId, payload));

app.set('port', app_config.port);

app.use(bodyParser.urlencoded({extended: false}));

require('http').createServer(app);

app.listen(app.get('port'), function(){
    console.log("App is running...");
    console.log("Press Ctrl+C to stop");
});