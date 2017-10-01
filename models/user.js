import mongoose from '../database/db';
import message from './message';

const userSchema = mongoose.Schema({
    profile: Object,
    userId: String,
    messages: [message.schema]
});
const User = mongoose.model('User', userSchema);

export default {
    schema: userSchema,
    model: User
};