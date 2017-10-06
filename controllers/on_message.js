import models from '../models/models';
import search_lecturers from './search_lecturers';
import search_faq from './search_faq';
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