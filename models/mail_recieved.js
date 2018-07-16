const db = require('../config/database'); //reference of dbconnection.js

let MailRecieved={

    getMailById:function(id,callback){
        return db.query("SELECT * FROM mail_recieved WHERE id=?",[id],callback);
    },

    addMail:function(mail,callback){
        return db.query("INSERT INTO mail_recieved (sender, subject, category_recieved, reason) VALUES (?,?,?,?)",mail,callback);
    },
};

module.exports= MailRecieved;