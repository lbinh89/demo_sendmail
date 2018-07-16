// Require nodemailer
const nodemailer = require('nodemailer');

// Get Mail Model
const mailRecieved = require('../models/mail_recieved');
// Get Category Model
const Category = require('../models/category');

let sendMail = (data, cb) => {

    if(data){
        // Get record mail just created
        mailRecieved.getMailById(data.insertId, (err, mail) => {

            if(err) return cb(err);
            if(mail){
                // Convert data email to JSON
                let emailJSON = JSON.parse(JSON.stringify(mail));
                // Get mail address of category
                Category.getCategoryById(emailJSON[0].category_recieved, (err, cat) =>{
                    if(err) cb(err);
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
                        from: emailJSON[0].sender,
                        to: cat[0].mail_contact,
                        subject: emailJSON[0].subject,
                        html: emailJSON[0].reason
                    }

                    // send mail with defined transport object
                    smtpTransport.sendMail(mailOptions, function(error, response){
                        if(error) return cb(error);
                        return cb();

                        // if you don't want to use this transport object anymore, uncomment following line
                        //smtpTransport.close(); // shut down the connection pool, no more messages
                    });
                });
                return cb();
            }
        });
    }else {
        return cb();
    }
};

module.exports= sendMail;