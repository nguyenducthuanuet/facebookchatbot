import models from '../models/models';
import botPromise from '../helpers/bot_promise';

const User = models.User;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload : GET_STARTED
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
        user.save().then(user => {
            let replies = [{
               content_type: 'text',
               title: 'Tra cứu',
               payload: 'SEARCH'
            }, {
                content_type: 'text',
                title: 'Hỏi đáp',
                payload: 'ASK'
            }];
            // let replies = [{
            //     content_type: 'text',
            //     title: 'Tài liệu',
            //     payload: 'SEARCH_DOCUMENTS'
            // }, {
            //     content_type: 'text',
            //     title: 'Giảng viên',
            //     payload: 'SEARCH_LECTURERS'
            // }];
            bot.sendQuickReplies(userId, `Xin chào ${profile['last_name']} ${profile['first_name']}! Chúng tôi có thể giúp gì cho bạn?`, replies);
        });
    });
}

export default onGetStarted;