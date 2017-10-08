import cmd from 'node-cmd';
require('dotenv').config();
const PAGE_ACCESS_TOKEN = process.env.PAGE_TOKEN;
const DOMAIN = process.env.DOMAIN;
var whitelisted_domain = {
    "setting_type" : "domain_whitelisting",
    "whitelisted_domains" : [DOMAIN],
    "domain_action_type": "add"
};

export function setup() {
    cmd.get(` curl -X POST -H "Content-Type: application/json" -d '${JSON.stringify(whitelisted_domain)}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=${PAGE_ACCESS_TOKEN}"`,
        function (err, data, stderr) {
            console.log(data);
        })
};