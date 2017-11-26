var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    fs = require('fs');
    path = require('path');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use(express.static('public'))
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // Simple Linear Regression

const csvFilePath = 'Advertising.csv'; // Data
var csvData = [], // parsed Data
    X = [], // Input
    y = []; // Output

var regressionModel;

const readline = require('readline'); // For user prompt to allow predictions

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

csv()
    .fromFile(csvFilePath)
    .on('json', function(jsonObj) {
    csvData.push(jsonObj);
}).on('done',function() {
    dressData(); // To get data points from JSON Objects
performRegression();
});

function performRegression() {
    regressionModel = new SLR(X, y); // Train the model on training data
    console.log(regressionModel.toString(3));
    predictOutput();
}

function dressData() {
    /**
     * One row of the data object looks like:
     * {
     *   TV: "10",
     *   Radio: "100",
     *   Newspaper: "20",
     *   "Sales": "1000"
     * }
     *
     * Hence, while adding the data points,
     * we need to parse the String value as a Float.
     */
    csvData.forEach(function(row) {
        X.push(f(row.radio));
    y.push(f(row.sales));
});
}

function f(s) {
    console.log("s is "+s);
    console.log("floating s is "+parseFloat(s));
    return parseFloat(s);
}

function predictOutput() {
    rl.question('Enter input X for prediction (Press CTRL+C to exit) : ', function(answer){
        console.log(`At X = ${answer}, y =  ${regressionModel.predict(parseFloat(answer))}`);
    predictOutput();
});
}

