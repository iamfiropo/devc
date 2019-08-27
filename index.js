const express = require('express');
const fs = require('fs');
const Debug = require('debug');
const chalk = require('chalk');
const http = require('http');

const app = express();

const dummyData = require('./data');

const debug = Debug('http');
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to a simple node server',
    });
})

const data = JSON.stringify(dummyData);
app.get('/write', (req, res) => {
    fs.writeFile('./fufu.json', data, error => {
        if(!error) {
            console.log('successful');
        }
    })
    res.status(200).json({
        status: 200,
        message: 'Json data added successfully'
    })
});


app.listen(port, () => {
    console.log(chalk.blue(`Server listening on port ${port}`));
})