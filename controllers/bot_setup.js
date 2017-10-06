/**
 * Setup started button, greeting text, menu, v.v...
 * @param {FBBotFramework} bot
 */
function botSetup(bot) {
    bot.setGetStartedButton("GET_STARTED");

    let persistent_menu = [{
        type: 'postback',
        title: '🔎 Tra cứu',
        payload: "MENU_SEARCH"
    }, {
        type: 'postback',
        title: '❓ Hỏi đáp',
        payload: "MENU_QA"
    }, {
        type: "web_url",
        title: "Đóng góp thông tin",
        url: "https://goo.gl/AZtQtN"
    }];
    bot.setPersistentMenu(persistent_menu);
}

export default botSetup;