export default {
    getUserProfile: (bot, userId) => new Promise((resolve, reject) => {
        try {
            bot.getUserProfile(userId, (err, profile) => {
                if (err) reject(err);
                resolve(profile);
            })
        } catch (e) {
            reject(e);
        }
    })
}