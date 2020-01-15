const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:162435@cluster0-nansc.azure.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, // evita warning
    useUnifiedTopology: true // evita warning
});

app.use(express.json());
app.use(routes);

app.listen(3333);