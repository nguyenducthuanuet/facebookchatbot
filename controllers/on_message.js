import models from '../models/models';
import routes from '../routes/message';
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
    user.messages.push({
        type: 'message',
        body: message
    });
    await user.save();
    routes.get(message, user)(bot, userId, message);
}

export default onMessage;