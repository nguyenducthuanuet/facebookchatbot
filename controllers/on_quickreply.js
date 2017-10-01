import routes from '../routes/quickreply';
import models from '../models/models';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
function onQuickreply(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    User.findOne({userId: userId}).then(user => {
        user.messages.push({
            type: 'quickreply',
            body: payload
        });
        user.save().then(user => routes.get(payload, user)(bot, userId, payload));
    });
}

export default onQuickreply;