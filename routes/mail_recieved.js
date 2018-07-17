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
router.post('/mail-recieved', async function (req, res, next) {

    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('subject', 'Subject must have value').not().isEmpty();
    req.checkBody('reason', 'Reason must have value').not().isEmpty();

    let email = req.body.email,
        subject = req.body.subject,
        category = req.body.category,
        reason = req.body.reason,
        errors = req.validationErrors();

    if(errors){
        res.render('index',{
            errors: errors
        });
    }else {
        try{
            let mailAdd = [email, subject, category, reason];
            let mailData = await mailRecieved.addMail(mailAdd);
            await sendMail(mailData);
            console.log(`Send email to ${email} successful`);
            res.redirect('/');
        }catch (e) {
            console.log(`Send email to ${email} fail`);
            return next(e);
        }
    }
});

// Exports
module.exports = router;