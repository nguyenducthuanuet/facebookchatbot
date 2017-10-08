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

app.get(`/subjects/:id`, function (req, res) {
    let id = req.params.id;
    axios.get(`http://sguet.com/api/subjects/${id}`)
        .then(response => {
            let code = `<b>Mã môn học</b>: ${response.data.code}<br>`;
            let VietnameseName = `<b>Tên tiếng Việt</b>: ${response.data.name}<br>`;
            let EnglishName = `<b>Tên tiếng Anh</b>: ${response.data.name_en}<br>`;
            let credits = `<b>Số tín chỉ</b>: ${response.data.credits}<br>`;
            let theoryHours = `<b>Số giờ lý thuyết</b>: ${response.data.theory_credit_hours}<br>`;
            let practiceHours = `<b>Số giờ bài tập</b>: ${response.data.practice_credit_hours}<br>`;
            let selfHours = `<b>Số giờ tự học</b>: ${response.data.self_study_credit_hours}<br>`;
            let preSubject = `<b>Học phần tiên quyết</b>: ${response.data.pre_subject_code}<br>`;
            let abstract = `<b>Mô tả</b>:<br> ${response.data.abstract}`;
            res.send(`<span style="display: flex; justify-content: center;"><b>${response.data.name}</b></span><br>
                        ${code}
                        ${VietnameseName}
                        ${EnglishName}
                        ${credits}
                        ${theoryHours}
                        ${practiceHours}
                        ${selfHours}
                        ${preSubject}
                        ${abstract}`
            );
        })
        .catch(e => console.log("e", e));
});

app.get(`/faqs/:id`, function (req, res) {
    let id = req.params.id;
    axios.get(`http://sguet.com/api/faqs/${id}`)
        .then(response => {
            let answer = response.data.answer;
            res.send(`<span style="display: flex; justify-content: center;"><b>${response.data.name}</b></span><br>${answer}`);
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