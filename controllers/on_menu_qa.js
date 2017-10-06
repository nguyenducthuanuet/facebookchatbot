/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 */
async function onMenuQA(bot, userId) {
    let replies = [{
        content_type: 'text',
        title: '⭐ Câu hỏi thường gặp',
        payload: 'FAQ'
    }, {
        content_type: 'text',
        title: '💬 Hỏi đáp trực tiếp',
        payload: 'DIRECT_QA'
    }];
    await bot.sendQuickReplies(userId, `Bạn muốn hỏi đáp gì?`, replies);
}

export default onMenuQA;