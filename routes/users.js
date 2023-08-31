const express = require('express')
const router = express.Router();
const Employee = require('../models/employee')

router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching employees' });
    }
});


// List appraisals to be evaluated
router.get('/appraisals/evaluate', async (req, res) => {
    try {
        const employeeId = req.query.employeeId; // Assuming you're sending the employee ID in the query parameter

        // Fetch appraisals where the current employee is the evaluator
        const appraisals = await Appraisal.find({ evaluator: employeeId }); // Populate reviewer details if needed

        res.json(appraisals);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching appraisals for evaluation' });
    }
});

module.exports=router