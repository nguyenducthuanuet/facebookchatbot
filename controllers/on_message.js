import models from '../models/models';
import routes from '../routes/message';
const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} message
 */
function onMessage(bot, userId, message) {
    console.log(`From ${userId}: ${message}`);
    User.findOne({userId: userId}).then(user => {
        user.messages.push({
            type: 'message',
            body: message
        });
        user.save().then(user => {
            routes.get(message, user)(bot, userId, message);
        });
    });
}

export default onMessage;