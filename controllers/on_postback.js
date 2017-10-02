import routes from '../routes/postback';
import models from '../models/models';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
async function onPostback(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    if (payload !== 'GET_STARTED') {
        let user = await User.findOne({userId: userId});
        user.messages.push({
            type: 'postback',
            body: payload
        });
        await user.save();
    }
    routes.get(payload)(bot, userId, payload);
}

export default onPostback;