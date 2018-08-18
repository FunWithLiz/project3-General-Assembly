// Express Set up:
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

// PORT setup and listen:
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend Server up and listening on port ${PORT}`);
});

// Logger Set up:
app.use(logger('dev'));
// BodyParser Set up:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Cors Set up: 
app.use(cors());

// Routes Set up:
const TABLE1Router = require('./routers/TABLE1router')
app.use('/api/table1', TABLE1Router);

// Error 404 Handler:
app.get('*', (req, res) => {
    res.status(404).send({message: 'UH-OH.. you done goofed!'})
});
