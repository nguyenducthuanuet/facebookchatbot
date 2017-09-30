require('dotenv').config();

let cfg = {
    driver: process.env.DB_DRIVER || 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_DATABASE || 'facebookchatbot',
};

cfg.url = `${cfg.driver}://${cfg.host}:${cfg.port}/${cfg.database}`;

export default cfg;