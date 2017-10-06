/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 */
async function onMenuSearch(bot, userId) {
    let replies = [{
        content_type: 'text',
        title: '👨‍🏫 Giảng viên & Hướng nghiên cứu',
        payload: 'SEARCH_LECTURERS'
    }, {
        content_type: 'text',
        title: '📃 Văn bản, biểu mẫu',
        payload: 'SEARCH_DOCUMENTS'
    }, {
        content_type: 'text',
        title: "📚 Thông tin môn học",
        payload: 'SEARCH_SUBJECTS'
    }];
    await bot.sendQuickReplies(userId, `Bạn muốn tra cứu gì?`, replies);
}

export default onMenuSearch;