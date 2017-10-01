import models from '../models/models';
const Lecturer = models.Lecturer;

/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 * @param {string} message
 */
function searchLecturers(bot, userId, message) {
    let query = {name: {$regex: `${message.trim()}$`, $options: "i"}};
    Lecturer.count(query).then(count => {
        if (count === 0) {
            bot.sendQuickReplies(userId, `Không tìm thấy GV nào tên là ${message.trim()}`, [{
                content_type: 'text',
                title: 'Tra cứu GV khác',
                payload: 'SEARCH_LECTURERS'
            }]);
        } else if (count <= 10) {
            Lecturer.find(query).then(lecturers => {
                lecturers = lecturers.map(lecturer => lecturer.toQuickreply());
                bot.sendQuickReplies(userId, `Tìm thấy ${count} kết quả. Vui lòng chọn 1`, lecturers);
            })
        } else {
            // TODO: paginate
            console.log(`Found ${count} results (more than 10)`);
        }
    });
}

export default searchLecturers;