/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 */
async function onSearchLecturers(bot, userId) {
    await bot.sendTextMessage(userId, 'Nhập tên giảng viên bạn muốn tìm kiếm');
}

export default onSearchLecturers;