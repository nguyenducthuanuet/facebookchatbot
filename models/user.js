import mongoose from '../database/db';
import messageSchema from './message';

const userSchema = mongoose.Schema({
    profile: Object,
    userId: String,
    messages: [messageSchema]
});
const User = mongoose.model('User', userSchema);

export default User;