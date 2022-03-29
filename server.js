const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
var cors = require('cors');
app.use(cors());

const mainRoute = require('/route/auth');

app.use('/', mainRoute);

const connectDB = async () => {
    mongoose.set('useFindAndModify', false);
    await mongoose.connect('mongodb + srv://otp:user1@otp.n3jhu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connection Estabilsed successfully");
    });
}

connectDB();


const PORT = process.env.PORT || 2817;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})