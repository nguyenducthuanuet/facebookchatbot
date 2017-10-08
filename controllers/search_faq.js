const request = require('request-promise');
import {sendAnswerFaq} from "../helpers/botSendAnswerFaq";
import axios from 'axios';
/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} message
 */
async function searchFaq(bot, userId, message) {
    let query = encodeURI(message);
    axios.get((`http://sguet.com/api/faqs/search?query=${query}`))
        .then(res => {
            let answers = res.data;
            sendAnswerFaq(bot, userId, answers);
        });
}

export default searchFaq;