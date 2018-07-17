const express = require ('express'),
    router = express.Router();

// Get Mail Model
const mailRecieved = require('../models/mail_recieved');
// Import sendmail helper
const sendMail = require('../helper/send_mail');

// Set route to index.ejs
router.get('/', function (req, res) {
    res.render('index');
});

// Set route to send mail
router.post('/mail-recieved', async function (req, res) {

    req.checkBody('sender', 'Invalid email').isEmail();
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
        await mailRecieved.addMail(mailAdd)
            .then(mail => {
                sendMail(mail)
            })
            .then(() => {
                console.log(`Send email to ${sender} successful`);
                res.redirect('/');
            })
            .catch(err => console.log(err));
    }

});

// Exports
module.exports = router;