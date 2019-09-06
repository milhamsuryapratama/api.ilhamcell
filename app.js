const express = require("express");
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const nominalRoutes = require('./routes/nominalRoute');
const operatorRoutes = require('./routes/operatorRoute');
const transaksiRoutes = require('./routes/transaksiRoute');

app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

app.use(nominalRoutes);
app.use(operatorRoutes);
app.use(transaksiRoutes);

mongoose
    .connect('mongodb://127.0.0.1:27017/ilhamcell')
    .then(result => {
        console.log(result);
        app.listen(3000);
    })
    .catch(error => {
        console.log(error);
    })