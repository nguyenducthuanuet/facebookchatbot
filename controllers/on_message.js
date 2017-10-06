import models from '../models/models';
import search_lecturers from './search_lecturers';
const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} message
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

    if (last_action.body === 'SEARCH_LECTURERS') {
        await search_lecturers(bot, userId, message);
    }
}

export default onMessage;