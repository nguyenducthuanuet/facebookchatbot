import models from '../models/models';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} payload "GET_STARTED"
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
    let getUserProfile = bot.getUserProfile(userId);
    let [user, profile] = await Promise.all([createUser, getUserProfile]);

    user.profile = profile;
    await user.save();
    let replies = [{
        content_type: 'text',
        title: '🔎 Tra cứu',
        payload: 'MENU_SEARCH'
    }, {
        content_type: 'text',
        title: '❓ Hỏi đáp',
        payload: 'MENU_QA'
    }];
    await bot.sendQuickReplies(userId, `Xin chào ${profile['last_name']} ${profile['first_name']}! Vui lòng chọn chức năng bạn muốn sử dụng?`, replies);
}

export default onGetStarted;