const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = process.env.PORT || 4000;

const app = express();

//Mount middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('tiny'));

// Routes
app.get('/', (req, res) => {
    res.send('Helo world').status(200);
})

// server setup
app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});