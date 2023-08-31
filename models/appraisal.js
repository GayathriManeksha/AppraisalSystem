// Appraisal Schema
const appraisalSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    evaluator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
}, {
    timestamps: true
});
const Appraisal = mongoose.model('Appraisal', appraisalSchema);

