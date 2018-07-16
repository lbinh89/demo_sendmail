const express = require ('express'),
    nodemailer = require('nodemailer'),
    router = express.Router();

// Get Category Model
const Category = require('../models/category');

// Set route to index.ejs
router.get('/', function (req, res) {
    res.render('index');
});

// Set route to send mail
router.post('/send-email', function (req, res) {

    req.checkBody('sender', 'Sender must have value').not().isEmpty();
    req.checkBody('subject', 'Subject must have value').not().isEmpty();
    req.checkBody('reason', 'Reason must have value').not().isEmpty();

    let sender = req.body.sender,
        subject = req.body.subject,
        category = req.body.category,
        reason = req.body.reason,
        errors = req.validationErrors();

    if(errors){
        res.render('index',{
            errors: errors
        });
    }else {
        let category_email = null;
        if(category){
            Category.getCategoryById(category,(err, category) => {
                if(err) return console.log(err);
                category_email = JSON.parse(JSON.stringify(category));

                // create reusable transport method (opens pool of SMTP connections)
                let smtpTransport = nodemailer.createTransport({
                    service: "Gmail",
                    auth: {
                        user: "binhle.testmail.1989@gmail.com",
                        pass: "binhbon2018"
                    }
                });

                // setup e-mail data with unicode symbols
                let mailOptions = {
                    from: sender,
                    to: category_email[0].mail_contact,
                    subject: subject,
                    html: reason
                }

                // send mail with defined transport object
                smtpTransport.sendMail(mailOptions, function(error, response){
                    if(error) return console.log(error);
                    res.redirect('/');

                    // if you don't want to use this transport object anymore, uncomment following line
                    //smtpTransport.close(); // shut down the connection pool, no more messages
                });
            });
        }
    }

});



// Exports
module.exports = router;