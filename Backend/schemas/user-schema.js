const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    quizzes: [
        {
            score: {
                type: Number,
                required: false,
                default: 0
            }
        }
    ]
})

module.exports = mongoose.model('User', UserSchema)
