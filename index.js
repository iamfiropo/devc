const express = require('express');

const app = express();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to a simple node server',
    });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})