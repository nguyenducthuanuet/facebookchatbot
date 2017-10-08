/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 */
async function onSearchSubject(bot, userId) {
    await bot.sendTextMessage(userId, 'Nhập tên môn học bạn muốn tìm kiếm');
}

export default onSearchSubject;