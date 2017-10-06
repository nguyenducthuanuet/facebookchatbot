import onSearchLecturers from './on_search_lecturers';
import detailLecture from './detail_lecture';
import onReset from './on_reset';
import onMenuSearch from './on_menu_search';
import onMenuQA from './on_menu_qa';
import onMenuDirectQA from  './on_menu_direct_qa';
import models from '../models/models';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
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
        case "DIRECT_QA": {
            await onMenuDirectQA(bot, userId);
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