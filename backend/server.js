const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors);

mongoose
.connect("mongodb://localhost:27017/ReportGeneration").then(() =>{
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log(`${error}`);
});

app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/report',require('./routes/reportRoutes'));

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
});