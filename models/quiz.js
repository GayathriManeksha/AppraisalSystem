// QuizResponses Schema
const quizResponsesSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    appraisal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appraisal'
    },
    quizResponses: [{
        question: String,
        answer: String
    }],
    completedAt: Date
});
const QuizResponses = mongoose.model('QuizResponses', quizResponsesSchema);
