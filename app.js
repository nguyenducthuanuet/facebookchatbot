'use strict';
import axios from 'axios';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import appConfig from './config/app_config';
import FBBotFramework from './helpers/bot_promise'
import botConfig from './config/bot_config';
import BootBot from 'bootbot';
import {setup} from "./config/setup_whitelisted_domais";
setup();
const bot = new FBBotFramework(botConfig);
const bootbot = new BootBot({
    accessToken: botConfig.page_token,
    verifyToken: botConfig.verify_token,
    appSecret: 'FB_APP_SECRET'
});

app.get(`/faqs/:id`, function (req, res) {
    let id = req.params.id;
    axios.get(`http://sguet.com/api/faqs/${id}`)
        .then(response => {
            let answer = response.data.answer;
            res.send(answer);
        })
        .catch(e => console.log("e", e));
});

import botSetup from './controllers/bot_setup';
import onMessage from './controllers/on_message';
import onPostback from './controllers/on_postback';
import onQuickreply from './controllers/on_quickreply';

app.use('/webhook', bot.middleware());

botSetup(bootbot);
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