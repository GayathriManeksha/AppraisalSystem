// PeerReviewFeedback Schema
const peerReviewFeedbackSchema = new mongoose.Schema({
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
const PeerReviewFeedback = mongoose.model('PeerReviewFeedback', peerReviewFeedbackSchema);
