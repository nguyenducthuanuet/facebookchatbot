import User from '../models/user';
import botPromise from '../helpers/bot_promise';

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
function onGetStarted(bot, userId, payload) {
    let clearAndCreate = User.remove({userId: userId}).then(() => User.create({
            userId: userId,
            profile: null,
            messages: [{
                type: 'postback',
                body: payload
            }]
        })
    );

    let getUserProfile = botPromise.getUserProfile(bot, userId);

    Promise.all([clearAndCreate, getUserProfile]).then(results => {
        let [user, profile] = results;
        user.profile = profile;
        user.save().then(() => {
            let replies = [{
                content_type: 'text',
                title: 'Tài liệu',
                payload: 'SEARCH_DOCUMENTS'
            }, {
                content_type: 'text',
                title: 'Giảng viên',
                payload: 'SEARCH_'
            }];
            bot.sendQuickReplies(userId, `Xin chào ${profile['last_name']} ${profile['first_name']}! Bạn muốn tra cứu thông tin gì?`, replies);
        });
    });
}

export default onGetStarted;