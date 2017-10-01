import db from '../database/db'

const messageSchema = db.Schema({
    type: String,
    body: String
});

export default {
    schema: messageSchema
};