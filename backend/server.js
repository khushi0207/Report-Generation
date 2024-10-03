const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
.connect(process.env.MORGO_URI).then(() =>{
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log(`${error}`);
});

app.use('/api',reportRoutes);

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
});