import {sendAnswerDocument} from "../helpers/botSendAnswer";
import onReset from './on_reset';
import axios from 'axios';
/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} message
 */
async function searchFaq(bot, userId, message) {
    let query = encodeURI(message);
    axios.get((`http://sguet.com/api/documents/search?query=${query}`))
        .then(async res => {
            let answers = res.data;
            if (answers.length == 0) {
                await bot.sendTextMessage(userId, "Hmmm! Thật ngại quá 😳! Chúng tớ chưa có văn bản mà cậu tìm kiếm. " +
                    "Hãy thử những tính năng khác của chúng tớ");
                await onReset(bot, userId);
            }
            else if (answers.length > 10) {
                sendAnswerDocument(bot, userId, answers.slice(0, 9));
                sendAnswerDocument(bot, userId, answers.slice(10, answers.length-1));
            } else {
                sendAnswerDocument(bot, userId, answers);
            }
        });
}

export default searchFaq;