/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} message
 */
function on_message(bot, userId, message) {
    console.log(`From ${userId}: ${message}`);
}

export default on_message;