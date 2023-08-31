const express = require('express');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config()

//since import is used add .js extension as well
const userRouter = require('./routes/users.js')

const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/", userRouter);

mongoose.connect(process.env.url);

app.listen(3005, () => {
    console.log('Server started on port 3005');
});