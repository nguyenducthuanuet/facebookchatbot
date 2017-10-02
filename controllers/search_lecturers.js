import models from '../models/models';
const Lecturer = models.Lecturer;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} message
 */
async function searchLecturers(bot, userId, message) {
    let query = {name: {$regex: `${message.trim()}$`, $options: "i"}};
    let count = await Lecturer.count(query);
    if (count === 0) {
        bot.sendQuickReplies(userId, `Không tìm thấy GV nào tên là ${message.trim()}`, [{
            content_type: 'text',
            title: 'Tra cứu GV khác',
            payload: 'SEARCH_LECTURERS'
        }]);
    } else if (count === 1) {
        let lecturer = await Lecturer.findOne(query);
        let message = lecturer.toDetailMessage();
        bot.sendQuickReplies(userId, message, [{
            content_type: 'text',
            title: 'Tra cứu GV khác',
            payload: 'SEARCH_LECTURERS'
        }]);
    } else if (count <= 10) {
        let lecturers = await Lecturer.find(query);
        lecturers = lecturers.map(lecturer => lecturer.toQuickreply());
        bot.sendQuickReplies(userId, `Tìm thấy ${count} kết quả. Vui lòng chọn 1`, lecturers);
    } else {
        // TODO: paginate
        console.log(`Found ${count} results (more than 10)`);
    }
}

export default searchLecturers;