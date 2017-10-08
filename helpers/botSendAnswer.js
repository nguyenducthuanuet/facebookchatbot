import axios from 'axios';
require('dotenv').config();

export function sendAnswerFaq(bot, userId, answers) {
    var elements = [];
    for(let i = 0; i < answers.length; i++) {
        elements = [...elements,
            {
                "title": answers[i].question,
                "default_action": {
                    "type": "web_url",
                    "url": `${process.env.DOMAIN}/faqs/${answers[i].id}`,
                    "messenger_extensions": true,
                    "webview_height_ratio": "tall",
                },
                "buttons": [
                    {
                        "type": "web_url",
                        "url": `${process.env.DOMAIN}/faqs/${answers[i].id}`,
                        "title": "Xem câu trả lời",
                        "webview_height_ratio": "tall",
                        "messenger_extensions": true,
                        "fallback_url": `${process.env.DOMAIN}/faqs/${answers[i].id}`
                    }
                ]
            }
        ];
    }
    bot.sendGenericMessage(userId, elements);
}

export function sendAnswerDocument(bot, userId, documents) {
    var elements = [];
    for(let i = 0; i < documents.length; i++) {
        elements = [...elements,
            {
                "title": documents[i].name,
                "buttons": [
                    {
                        "type": "web_url",
                        "url": documents[i].url,
                        "title": "Tải về",
                    }
                ]
            }
        ];
    }
    bot.sendGenericMessage(userId, elements);
}

export function sendAnswerSubject(bot, userId, subjects) {
    var elements = [];
    for(let i = 0; i < subjects.length; i++) {
        elements = [...elements,
            {
                "title": subjects[i].name,
                "default_action": {
                    "type": "web_url",
                    "url": `${process.env.DOMAIN}/subjects/${subjects[i].id}`,
                    "messenger_extensions": true,
                    "webview_height_ratio": "tall",
                },
                "buttons": [
                    {
                        "type": "web_url",
                        "url": `${process.env.DOMAIN}/subjects/${subjects[i].id}`,
                        "title": "Xem câu trả lời",
                        "webview_height_ratio": "tall",
                        "messenger_extensions": true,
                        "fallback_url": `${process.env.DOMAIN}/subjects/${subjects[i].id}`
                    }
                ]
            }
        ];
    }
    bot.sendGenericMessage(userId, elements);
}