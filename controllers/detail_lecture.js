import models from '../models/models';
const Lecturer = models.Lecturer;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} payload LECTURER_slug
 */
function detailLecture(bot, userId, payload) {
    let slug = payload.replace('LECTURER_', '');
    Lecturer.findOne({slug: slug}).then(lecturer => {
        let message = lecturer.toDetailMessage();
        bot.sendQuickReplies(userId, message, [{
            content_type: 'text',
            title: 'Tra cứu GV khác',
            payload: 'SEARCH_LECTURERS'
        }]);
    });
}

export default detailLecture;