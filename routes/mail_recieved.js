const express = require ('express'),
    nodemailer = require('nodemailer'),
    router = express.Router();

// Get Category Model
const mailRecieved = require('../models/mail_recieved');
// Import sendmail helper
const sendMail = require('../helper/send_mail');

// Set route to index.ejs
router.get('/', function (req, res) {
    res.render('index');
});

// Set route to send mail
router.post('/mail-recieved', function (req, res) {

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
        let mailAdd = [sender, subject, category, reason];
        mailRecieved.addMail(mailAdd, (err, mail) => {
            if(err) return console.log(err);
            if(mail){
                sendMail(mail, (err) => {
                    if(err) return console.log(err);
                    console.log(`${sender} send email successful`);
                    res.redirect('/');
                })
            }
        });
    }

});

// Exports
module.exports = router;