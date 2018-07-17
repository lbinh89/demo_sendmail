// Require nodemailer
const nodemailer = require('nodemailer');

// Get Mail Model
const mailRecieved = require('../models/mail_recieved');
// Get Category Model
const Category = require('../models/category');

let sendMail = async (data) => {

    if(data){
        try{
            let mail = await mailRecieved.getMailById(data.insertId);
            if(mail){
                // Convert data email to JSON
                let emailJSON = JSON.parse(JSON.stringify(mail));
                let getCategory = await Category.getCategoryById(emailJSON[0].category_recieved);

                // create reusable transport method (opens pool of SMTP connections)
                let smtpTransport = nodemailer.createTransport({
                    service: "Gmail",
                    auth: {
                        user: "binhle.testmail.1989@gmail.com",
                        pass: "binhbon2018"
                    }
                });

                // setup e-mail data with unicode symbols
                const html = `
                             <div class="person">
                                <h4>
                                    Reply to: ${emailJSON[0].email}
                                </h4>
                                <p class="text-body">Your problem please contact: <br> <a href="${getCategory[0].mail_contact}">${getCategory[0].mail_contact}</a></p>
                             </div>
                            `;
                let mailOptions = {
                    from: 'binhle.testmail.1989@gmail.com',
                    to: emailJSON[0].email,
                    subject: emailJSON[0].subject,
                    html: html
                }

                // send mail with defined transport object
                smtpTransport.sendMail(mailOptions, ()=> {
                    // if you don't want to use this transport object anymore, uncomment following line
                    smtpTransport.close(); // shut down the connection pool, no more messages
                });
            }
        }catch (error) {
            return console.log(error);
        }
    }else {
        return (new Error('Oops! Something wrong!!'));
    }
};

module.exports= sendMail;