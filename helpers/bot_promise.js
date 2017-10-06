const FBBotFramework = require('fb-bot-framework');

class BotPromise extends FBBotFramework {
    sendTextMessage(userId, text, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendTextMessage(userId, text, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendImageMessage(userId, imageUrl, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendImageMessage(userId, imageUrl, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendAudioAttachment(userId, audioUrl, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendAudioAttachment(userId, audioUrl, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendVideoAttachment(userId, videoUrl, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendVideoAttachment(userId, videoUrl, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendFileAttachment(userId, fileUrl, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendFileAttachment(userId, fileUrl, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendButtonMessage(userId, text, buttons, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendButtonMessage(userId, text, buttons, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendGenericMessage(userId, elements, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendGenericMessage(userId, elements, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendBubbleMessage(userId, elements, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendBubbleMessage(userId, elements, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendReceiptMessage(userId, receipt, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendReceiptMessage(userId, receipt, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendLocationRequest(userId, text, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendLocationRequest(userId, text, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendQuickReplies(userId, text, replies, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendQuickReplies(userId, text, replies, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    sendListMessage(userId, elements, notificationType = 'REGULAR') {
        return new Promise((resolve, reject) => {
            try {
                super.sendListMessage(userId, elements, notificationType, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(result);
                });
            } catch(e) {
                reject(e);
            }
        });
    }

    getUserProfile(userId) {
        return new Promise((resolve, reject) => {
            try {
                super.getUserProfile(userId, (err, profile) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(profile);
                })
            } catch (e) {
                reject(e);
            }
        })
    }
}

export default BotPromise