/**
 * Setup started button, greeting text, menu, v.v...
 * @param {FBBotFramework} bot
 */
function botSetup(bot) {
    // bot.setGetStartedButton("GET_STARTED");

    // let persistent_menu = [{
    //     type: 'postback',
    //     title: '🔎 Tra cứu',
    //     payload: "MENU_SEARCH"
    // }, {
    //     type: 'postback',
    //     title: '❓ Hỏi đáp',
    //     payload: "MENU_QA"
    // }, {
    //     type: "web_url",
    //     title: "Đóng góp thông tin",
    //     url: "https://goo.gl/AZtQtN"
    // }];
    // bot.setPersistentMenu(persistent_menu);
    bot.setPersistentMenu([
        {
            title: '🔎 Tra cứu',
            type: 'nested',
            call_to_actions: [
                {
                    type: 'postback',
                    title: '‍🏫 Danh bạ UET',
                    payload: 'CONTACT'
                },
                {
                    type: 'postback',
                    title: '🏫 Hướng nghiên cứu',
                    payload: 'SEARCH_LECTURERS'
                },
                {
                    type: 'postback',
                    title: '📃 Văn bản, biểu mẫu',
                    payload: 'SEARCH_DOCUMENTS'
                }, {
                    type: 'postback',
                    title: "📚 Thông tin môn học",
                    payload: 'SEARCH_SUBJECTS'
                }
            ]
        },
        {
            title: '❓ Hỏi đáp',
            type: 'nested',
            call_to_actions: [
                {
                    type: 'postback',
                    title: '⭐ Câu hỏi thường gặp',
                    payload: 'FAQ'
                }, {
                    type: 'postback',
                    title: '💬 Hỏi đáp trực tiếp',
                    payload: 'DIRECT_QA'
                }
            ]
        }
        , {
            type: "web_url",
            title: "Đóng góp thông tin",
            url: "https://goo.gl/AZtQtN"
        }], false);
}

export default botSetup;