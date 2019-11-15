const mysql=require('mysql');
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Qwerty@123",
    database:"mydb"
});
module.exports=connection;