/**
 *
 * @param {FBBotFramework} bot
 * @param {string} userId
 */
async function onMenuDirectQA(bot, userId) {
    let customer = await bot.getUserProfile(userId);
    console.log(customer);
    //TODO: gui tin nhan thong bao den admin
    await bot.sendTextMessage("1321210537978392", `${customer.first_name} ${customer.last_name} muốn gặp trực tiếp admin, bạn vui lòng vào trả lời!`)
}

export default onMenuDirectQA;