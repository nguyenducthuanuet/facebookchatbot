import routes from '../routes/postback';
import models from '../models/models';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
function onPostback(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    if (payload !== 'GET_STARTED') {
        User.findOne({userId: userId}).then(user => {
            user.messages.push({
                type: 'postback',
                body: payload
            });
            user.save().then(user => routes.get(payload, user)(bot, userId, payload));
        });
    } else {
        routes.get(payload)(bot, userId, payload);
    }
}

export default onPostback;