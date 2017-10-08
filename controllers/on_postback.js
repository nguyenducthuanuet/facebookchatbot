import models from '../models/models';
import onGetStarted from './on_get_started';
import onSearchLecturers from './on_search_lecturers';
import onReset from './on_reset';
import onMenuDirectQA from './on_menu_direct_qa';
import onSearchFAQ from './on_search_faq';
import onMenuSearch from './on_menu_search';
import onMenuQA from './on_menu_qa';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} payload
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
            case "CONTACT": {
                await onSearchLecturers(bot, userId);
                break;
            }
            case "RESEARCH" :{
                break;
            }
            case "RESET": {
                await onReset(bot, userId);
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
            case "DIRECT_QA": {
                await onMenuDirectQA(bot, userId);
                break;
            }
            case "FAQ": {
                await onSearchFAQ(bot, userId);
                break;
            }
        }
    }
}

export default onPostback;