/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 */
async function onSearchDocument(bot, userId) {
    console.log("on search FAQ");
    await bot.sendTextMessage(userId, 'Nhập văn bản/biểu mẫu bạn muốn tìm kiếm');
}

export default onSearchDocument;