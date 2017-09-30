import routes from '../routes/quickreply';

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
function on_quickreply(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    routes.get(payload)(bot, userId, payload);
}

export default on_quickreply;