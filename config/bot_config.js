require('dotenv').config();

export default {
    page_token: process.env.PAGE_TOKEN,
    verify_token: process.env.VERIFY_TOKEN || 'verify_token'
};
