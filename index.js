const express = require('express');
const fs = require('fs');
const Debug = require('debug');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const app = express();

const dummyData = require('./data');
// const studentRouter = express.Router();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to a simple node server',
  });
})

const data = JSON.stringify(dummyData, null, 2);
app
  .get('/retrieve', (req, res) => {
    let rawData = fs.readFile('./data.json', (error, data) => {
      if(error) throw error 
      let student = JSON.parse(data);
      res.json(student);
    });
  })

  .get('/add', (req, res) => {
    fs.writeFile('./fufu.json', data, error => {
      if (!error) {
        console.log('successful');
      }
    })
    res.status(200).json({
      status: 200,
      message: 'Json data added successfully'
    })
  });
// app.use('/api', studentRouter);

app.listen(port, () => {
  console.log(chalk.blue(`Server listening on port ${port}`));
})