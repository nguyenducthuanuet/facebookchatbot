import onSearchLecturers from './on_search_lecturers';
import detailLecture from './detail_lecture';
import onReset from './on_reset';
import onMenuSearch from './on_menu_search';
import onMenuQA from './on_menu_qa';
import onSearchFAQ from './on_search_faq';
import models from '../models/models';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} payload
 */
async function onQuickreply(bot, userId, payload) {
    console.log(`From ${userId}: ${payload}`);
    let user = await User.findOne({userId: userId});
    user.messages.push({
        type: 'quickreply',
        body: payload
    });
    await user.save();

    switch (payload) {
        case "SEARCH_LECTURERS": {
            await onSearchLecturers(bot, userId);
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
        case "FAQ": {
            await onSearchFAQ(bot, userId);
            break;
        }
        default: {
            if (payload.startsWith("LECTURER_")) {
                await detailLecture(bot, userId, payload);
            }
        }
    }
}

export default onQuickreply;