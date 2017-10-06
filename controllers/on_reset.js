/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 */
async function onReset(bot, userId) {
    let replies = [{
        content_type: 'text',
        title: '🔎 Tra cứu',
        payload: 'MENU_SEARCH'
    }, {
        content_type: 'text',
        title: '❓ Hỏi đáp',
        payload: 'MENU_QA'
    }];
    await bot.sendQuickReplies(userId, `Vui lòng chọn chức năng bạn muốn sử dụng?`, replies);
}

export default onReset;