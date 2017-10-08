import models from '../models/models';
import search_lecturers from './search_lecturers';
import search_faq from './search_faq';
import axios from 'axios';
const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} message
 */
async function onMessage(bot, userId, message) {


    // var elements = [
    //     {
    //         "title": "Classic Grey T-Shirt",
    //         "subtitle": "Soft gray cotton t-shirt is back in style",
    //         "default_action": {
    //             "type": "web_url",
    //             "url": "https://d758a3fd.ngrok.io",
    //             "messenger_extensions": true,
    //             "webview_height_ratio": "tall",
    //         },
    //         "buttons": [
    //             {
    //                 "type": "web_url",
    //                 "url": "https://d758a3fd.ngrok.io",
    //                 "title": "View Item",
    //                 "webview_height_ratio": "tall",
    //                 "messenger_extensions": true,
    //                 "fallback_url": "https://d758a3fd.ngrok.io/"
    //             }
    //         ]
    //     },
    //     {
    //         "title": "Classic Grey T-Shirt",
    //         "subtitle": "Soft gray cotton t-shirt is back in style",
    //         "default_action": {
    //             "type": "web_url",
    //             "url": "https://peterssendreceiveapp.ngrok.io/shop_collection",
    //             "messenger_extensions": true,
    //             "webview_height_ratio": "tall",
    //             "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
    //         },
    //         "buttons": [
    //             {
    //                 "type": "web_url",
    //                 "url": "https://peterssendreceiveapp.ngrok.io/collection",
    //                 "title": "View Item",
    //                 "webview_height_ratio": "tall",
    //                 "messenger_extensions": true,
    //                 "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
    //             }
    //         ]
    //     }
    // ];
    //
    // bot.sendGenericMessage(userId, elements);
    console.log(`From ${userId}: ${message}`);

    let user = await User.findOne({userId: userId});
    let last_action = user.messages.reverse()[0];
    user.messages.push({
        type: 'message',
        body: message
    });
    await user.save();

    switch (last_action.body) {
        case "SEARCH_LECTURERS": {
            await search_lecturers(bot, userId, message);
            break;
        }
        case "FAQ": {
            await search_faq(bot, userId, message);
            break;
        }
    }
}

export default onMessage;