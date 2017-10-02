import routes from '../routes/quickreply';
import models from '../models/models';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
async function onQuickreply(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    let user = await User.findOne({userId: userId});
    user.messages.push({
        type: 'quickreply',
        body: payload
    });
    await user.save();
    routes.get(payload, user)(bot, userId, payload);
}

export default onQuickreply;