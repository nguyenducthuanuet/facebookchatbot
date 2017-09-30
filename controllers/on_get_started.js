import User from '../models/user';

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload
 */
function on_get_started(bot, userId, payload) {
    User.find({userId: userId}).remove().exec();
    bot.getUserProfile(userId, (err, profile) => {
        User.create({
            userId: userId,
            profile: profile,
            messages: [{
                type: 'postback',
                body: payload
            }]
        }).then(user => {
            console.log(`Created user ${user.userId}`);
        });

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
}

export default on_get_started;