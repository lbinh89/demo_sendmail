const db = require('../config/database'); //reference of database.js

let Category={

    getAllCategory:function(){
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM category", (err, results) => {
                if(err) return reject(err);
                return resolve(results);
            })
        });
    },
    getCategoryById:function(id){
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM category WHERE id=?",[id], (err, results) => {
                if(err) return reject(err);
                return resolve(results);
            })
        });
    },
};

module.exports= Category;