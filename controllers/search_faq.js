const request = require('request-promise');

/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} message
 */
async function searchFaq(bot, userId, message) {
    let query = encodeURI(message);

    await bot.sendButtonMessage(userId, 'Xem kết quả tại đây', [{
        type: "web_url",
        url: `http://sguet.com?query=${query}`,
        title: 'Xem kết quả'
    }]);

    let endReplies = [{
        content_type: 'text',
        title: 'Nhập từ khoá khác',
        payload: 'FAQ'
    }, {
        content_type: 'text',
        title: 'Chức năng khác',
        payload: 'RESET'
    }];
    await bot.sendQuickReplies(userId, 'Tiếp tục?', endReplies);

    let response = await request(`http://sguet.com/api/faqs/search?query=${query}`);
    response = JSON.parse(response);
    console.log(response.length);
}

export default searchFaq;