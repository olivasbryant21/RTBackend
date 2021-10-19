var mysql = require('mysql'); 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rtuser"
});

con.connect(function(err) {
    if(err) throw err;
    var sql = "INSERT INTO USERS (userName, phoneNumber, email) VALUES ?";
    var values = [
        ['Jose Esteban','77983583','estebanjose@gmail.com']
    ];
    con.query(sql, [values],function(err, result) {
if (err) throw err;
    console.log("Data inserted" + result.affectedRows);
});
});

/*con.connect(function(err) {
   if(err) throw err;
    var sql = "INSERT INTO CONTACTS (contactName, contactNumber) SELECT userName, phoneNumber FROM USERS";
    con.query(sql, function(err, result) {
if (err) throw err;
    console.log("completed");
    });
});*/
