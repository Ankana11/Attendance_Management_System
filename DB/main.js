
var mysql = require('mysql');
var faker = require('faker')

 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'join_us'  // the name of your db
});

var data = [];
for(var i = 0; i < 100 ; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
var q = 'Insert into users(email,created_at) values?';
connection.query(q,[data],function(err,result){
    console.log(err);
    console.log(result);
})

connection.end();


