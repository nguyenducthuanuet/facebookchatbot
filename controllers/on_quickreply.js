import routes from '../routes/quickreply';

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
function onQuickreply(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    routes.get(payload)(bot, userId, payload);
}

export default onQuickreply;