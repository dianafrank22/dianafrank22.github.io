require('dotenv').config();

const logger        = require('morgan');
const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const project       = require('./routes/project')
const webpack       = require('webpack');
const config        = require('./webpack.config');

const app           = express();
const compiler      = webpack(config);
const port          = process.env.PORT || 3000;


// @TODO create routes for api calls here, that way they're done server side
// the requests on client side will 


app.use(express.static(path.join(__dirname, 'dist')))

app.use(bodyParser.json());

app.use(logger('dev'));

app.listen(port, () =>{
	console.log('Server running on port ', port)
})

app.use('/project', project)