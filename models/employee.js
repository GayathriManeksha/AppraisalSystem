const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    roles: [{
        type: String,
        required: true
    }],
    directReports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    // Add other fields as needed
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
