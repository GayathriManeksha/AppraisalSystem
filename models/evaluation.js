// EvaluationFeedback Schema
const evaluationFeedbackSchema = new mongoose.Schema({
    appraisal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appraisal'
    },
    evaluator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    feedback: String,
    evaluatedAt: Date
});
const EvaluationFeedback = mongoose.model('EvaluationFeedback', evaluationFeedbackSchema);
