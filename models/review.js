// ReviewFeedback Schema
const reviewFeedbackSchema = new mongoose.Schema({
    appraisal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appraisal'
    },
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    feedback: String,
    reviewedAt: Date
});
const ReviewFeedback = mongoose.model('ReviewFeedback', reviewFeedbackSchema);
