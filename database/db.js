const mongoose = require('mongoose');
import db_config from '../config/db_config';

mongoose.Promise = global.Promise;
mongoose.connect(db_config.url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log(`connected to ${db_config.url}`);
});

export default mongoose