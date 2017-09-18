import dbworker from './dbworker';

const REGULAR = 'REGULAR';
const foldm = (r,j) => r.reduce((a,b,i,g) => !(i % j) ? a.concat([g.slice(i,i+j)]) : a, []);
const log = err => err && console.log(err);

export default {
    askUserChooseHuman: (userId, bot, humans) => {
        let text = `Tìm thấy ${humans.length} kết quả, vui lòng chọn 1`;
        if (humans.length <= 11) {
            let replies = humans.map(human => {
                return {
                    content_type: "text",
                    title: human.name,
                    payload: `DETAIL_HUMAN_${human.id}`
                }
            });
            bot.sendQuickReplies(userId, text, replies, REGULAR, log);
        } else {
            let chunks  = foldm(humans, 3);
            chunks.forEach(chunk => {
                let elements = chunk.map(human => {
                    return {
                        type: "postback",
                        title: human.name,
                        payload: `DETAIL_HUMAN_${human.id}`
                    }
                });
                console.log(elements);
                bot.sendButtonMessage(userId, text, elements, REGULAR, log);
            });
        }
    },
    replyNoResult: (userId, message, bot) => {
        bot.sendTextMessage(userId, `Không tìm thấy kết quả cho từ khoá "${message}"`, REGULAR, log);
    },
    showDetailHuman: (userId, bot, human) => {
        const showDetailHumanObj = _human => {
            let messages = [`${_human.academic_title || ''} ${_human.name}`];
            dbworker.humanOffices(_human.id, offices => {
                if (offices.length) {
                    messages.push('Chức vụ/nơi công tác:');
                    messages = messages.concat(offices.map(office => `- ${office.position || 'Làm việc'} tại ${office.department_name}`));
                }
                bot.sendTextMessage(userId, messages.join("\n"), REGULAR, log);
            })
        };

        if (Number.isInteger(human)) {
            dbworker.detailHuman(human, _human => _human && showDetailHumanObj(_human))
        } else {
            showDetailHumanObj(human);
        }
    }
}