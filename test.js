const pg = require('pg');


var connectionString = "postgres://postgres:1114@localhost:5432/cheeseordersdb";
const client = new pg.Client(connectionString);

var saledate = '09/14/2018';

client.query("select userid from orders where saledate=$1", [saledate], function (err, boxnumResult) {
    if (err) {
      throw err;
    }
    console.log("---------------------------------------------------");
    console.log(boxnumResult);
    if (boxnumResult.rows[0].boxnum) {
      console.log("value is not falsy!");
    }
    console.log(boxnumResult.rows[0].boxnum);
    console.log((boxnumResult.rows[0].boxnum) + 1);
    console.log("---------------------------------------------------");
  })
