/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 */
async function onSearchFAQ(bot, userId) {
    await bot.sendTextMessage(userId, 'Nhập từ khoá về vấn đề bạn muốn tìm kiếm');
}

export default onSearchFAQ;