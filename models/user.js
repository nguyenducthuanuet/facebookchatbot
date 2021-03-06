import mongoose from '../database/db';

const userSchema = mongoose.Schema({
    profile: Object,
    userId: String,
    messages: [mongoose.Schema({
        type: String,
        body: String
    })]
});
const User = mongoose.model('User', userSchema);

export default {
    schema: userSchema,
    model: User
};