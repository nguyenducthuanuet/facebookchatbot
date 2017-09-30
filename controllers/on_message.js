/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} message
 */
function onMessage(bot, userId, message) {
    console.log(`From ${userId}: ${message}`);
}

export default onMessage;