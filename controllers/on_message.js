import models from '../models/models';
import search_lecturers from './search_lecturers';
import search_faq from './search_faq';
import search_document from './search_document';
import search_subject from './search_subject';
const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} message
 */
async function onMessage(bot, userId, message) {

    console.log(`From ${userId}: ${message}`);

    let user = await User.findOne({userId: userId});
    let last_action = user.messages.reverse()[0];
    user.messages.push({
        type: 'message',
        body: message
    });
    await user.save();

    switch (last_action.body) {
        case "CONTACT": {
            await search_lecturers(bot, userId, message);
            break;
        }
        case "FAQ": {
            await search_faq(bot, userId, message);
            break;
        }
        case "SEARCH_DOCUMENTS" :{
            await search_document(bot, userId, message);
            break;
        }
        case "SEARCH_SUBJECTS" :{
            await search_subject(bot, userId, message);
        }
    }
}

export default onMessage;