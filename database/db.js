const mongoose = require('mongoose');
import dbConfig from '../config/db_config';

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log(`connected to ${dbConfig.url}`);
});

export default mongoose