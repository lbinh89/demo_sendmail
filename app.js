// Import module
const express = require('express'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    path = require('path');

// Init app
 const app = express();

// View engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs' );

// Set public folder
app.use(express.static(path.join(__dirname,'public')));

// Body paser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set global errors variable
app.locals.errors = null;
// Get Category Model
const Category = require('./models/category');

// Get all categories to pass to header.ejs
// Category.getAllCategory(function (err, categories) {
//     if(err) return console.log(err);
//     app.locals.categories = categories;
// });
function Cate(){
    return new Promise((resolve, reject) => {
        Category.getAllCategory()
            .then(categories => { resolve(categories) })
            .catch(error => reject(error));
    });
}

Cate()
    .then(res => app.locals.categories = res)
    .catch(err => console.log(err));
//
console.log(app.locals.categories);
// Express Validator middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length){
            formParam += '['+ namespace.shift() +']';
        }

        return{
            param: formParam,
            msg: msg,
            value: value
        }
    },
}));

// Set routes
// var category = require('./routes/category');
var mail = require('./routes/mail_recieved');
// app.use('/category',category);
app.use('/',mail);

// Start the server
var port = 3000;
app.listen(port, function () {
    console.log('Server started on port: ' + port);
});