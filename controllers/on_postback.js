import models from '../models/models';
import onGetStarted from './on_get_started';
import onSearchLecturers from './on_search_lecturers';
import onMenuSearch from './on_menu_search';
import onMenuQA from './on_menu_qa';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
async function onPostback(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);

    if (payload === "GET_STARTED") {
        await onGetStarted(bot, userId, payload);
    } else {
        let user = await User.findOne({userId: userId});
        user.messages.push({
            type: 'postback',
            body: payload
        });
        await user.save();

        switch (payload) {
            case "SEARCH_LECTURERS": {
                await onSearchLecturers(bot, userId);
                break;
            }
            case "MENU_SEARCH": {
                await onMenuSearch(bot, userId);
                break;
            }
            case "MENU_QA": {
                await onMenuQA(bot, userId);
                break;
            }
        }
    }
}

export default onPostback;