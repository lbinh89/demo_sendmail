const db = require('../config/database'); //reference of dbconnection.js

let Category={

    // getAllCategory:function(){
    //     return new Promise((resolve, reject) => {
    //         db.query("SELECT * FROM category", (err, results) => {
    //             if(err) return reject(err);
    //             return resolve(results);
    //         })
    //     });
    // },
    getAllCategory:function(callback){
        return db.query("SELECT * FROM category",callback);
    },
    getCategoryById:function(id){
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM category WHERE id=?",[id], (err, results) => {
                if(err) return reject(err);
                return resolve(results);
            })
        });
    },
    // getCategoryById:function(id,callback){
    //     return db.query("SELECT * FROM category WHERE id=?",[id],callback);
    // },
};

module.exports= Category;