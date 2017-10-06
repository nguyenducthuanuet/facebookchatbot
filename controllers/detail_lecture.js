import models from '../models/models';
const Lecturer = models.Lecturer;

/**
 *
 * @param {FBBotFramework} bot
 * @param {String} userId
 * @param {String} payload LECTURER_slug
 */
async function detailLecture(bot, userId, payload) {
    let slug = payload.replace('LECTURER_', '');
    let lecturer = await Lecturer.findOne({slug: slug});
    let message = lecturer.toDetailMessage();
    await bot.sendQuickReplies(userId, message, [{
        content_type: 'text',
        title: 'Tra cứu GV khác',
        payload: 'SEARCH_LECTURERS'
    }]);
}

export default detailLecture;