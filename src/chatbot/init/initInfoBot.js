export default function (bot) {
    bot.setGreetingText("Tra cứu thông tin UET");
    let menuButtons = [
        {
            "type": "postback",
            "title": "Help",
            "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_HELP"
        },
        {
            "type": "postback",
            "title": "Start a New Order",
            "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_START_ORDER"
        },
        {
            "type": "web_url",
            "title": "View Our Fanpage",
            "url": "https://facebook.com/tekohotline/"
        }
    ];
    bot.setPersistentMenu(menuButtons);
}