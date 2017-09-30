import routes from '../routes/postback';

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
function on_postback(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    routes.get(payload)(bot, userId, payload);
}

export default on_postback;