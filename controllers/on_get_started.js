import models from '../models/models';
import botPromise from '../helpers/bot_promise';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload : GET_STARTED
 */
async function onGetStarted(bot, userId, payload) {
    await User.remove({userId: userId});

    let createUser = User.create({
        userId: userId,
        profile: null,
        messages: [{
            type: 'postback',
            body: payload
        }]
    });
    let getUserProfile = botPromise.getUserProfile(bot, userId);
    let [user, profile] = await Promise.all([createUser, getUserProfile]);

    user.profile = profile;
    await user.save();
    let replies = [{
        content_type: 'text',
        title: 'Tài liệu',
        payload: 'SEARCH_DOCUMENTS'
    }, {
        content_type: 'text',
        title: 'Giảng viên',
        payload: 'SEARCH_LECTURERS'
    }];
    bot.sendQuickReplies(userId, `Xin chào ${profile['last_name']} ${profile['first_name']}! Bạn muốn tra cứu thông tin gì?`, replies);
}

export default onGetStarted;