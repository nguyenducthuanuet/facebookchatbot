'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import appConfig from './config/app_config';

const FBBotFramework = require('fb-bot-framework');
import botConfig from './config/bot_config';
const bot = new FBBotFramework(botConfig);
import botSetup from './controllers/bot_setup';
import onMessage from './controllers/on_message';
import onPostback from './controllers/on_postback';
import onQuickreply from './controllers/on_quickreply';

app.use('/webhook', bot.middleware());

botSetup(bot);
bot.on('message', (userId, message) => onMessage(bot, userId, message));
bot.on('postback', (userId, payload) => onPostback(bot, userId, payload));
bot.on('quickreply', (userId, payload) => onQuickreply(bot, userId, payload));

app.set('port', appConfig.port);

app.use(bodyParser.urlencoded({extended: false}));

require('http').createServer(app);

app.listen(app.get('port'), function(){
    console.log("App is running...");
    console.log("Press Ctrl+C to stop");
});

import Seeder from './database/seeder';
app.use('/seed', Seeder.run);