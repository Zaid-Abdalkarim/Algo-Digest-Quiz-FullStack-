const mongoose = require('mongoose')

const Question = new mongoose.Schema({
    quiz: [
        {
            description: String,
            alternatives: [
                {
                    text: {
                        type: String,
                        required: true
                    },
                    isCorrect: {
                        type: Boolean,
                        required: true,
                        defualt: false
                    }
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Question', Question)
