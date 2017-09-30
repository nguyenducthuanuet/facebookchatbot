/**
 * Setup started button, greeting text, menu, v.v...
 * @param {FBBotFramework} bot
 */
function botSetup(bot) {
    bot.setGetStartedButton("GET_STARTED");

    let persistent_menu = [{
        type: 'postback',
        title: 'Tra cứu tài liệu',
        payload: 'SEARCH_DOCUMENTS'
    }, {
        type: 'postback',
        title: 'Tra cứu giảng viên',
        payload: 'SEARCH_LECTURERS'
    }];
    bot.setPersistentMenu(persistent_menu);
}

export default botSetup;