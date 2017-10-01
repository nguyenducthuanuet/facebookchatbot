/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} payload : SEARCH_LECTURERS
 */
function onSearchLecturers(bot, userId, payload) {
    bot.sendTextMessage(userId, 'Nhập tên giảng viên bạn muốn tìm kiếm');
}

export default onSearchLecturers;