app.post('/deletePrice', function (req, res) {
  console.log("Into deletePrice with this data to delete on server side: ");
  console.log(req.body);
  var removeId = req.body.id;
  var removeDateValues = req.body.saledate;
  var removePriceValues = req.body.price;
  console.log("removeDateValues is: " + removeDateValues);

  //SQL DATABASE
  client.connect(function (err) {

    console.log("Database connected for deletePrice!");
    client.query("delete from prices where saledate=$1 and id=$2;", [removeDateValues, removeId], function (err, result, fields) {
      if (err) {
        throw err;
      }
      //Check if price is set on setprices database for that particular date.
      client.query("select price, saledate from prices where saledate=$1", [removeDateValues], function (err, result) {
        if (err) {
          throw err;
        }
        var addPrice = 0.00;
        var id;

        //price is found for that particular date. 
        if (result.rowCount >= 1) {
          //update the order table with the prices! 
          client.query("select id, pounds, saledate from orders where saledate=$1;", [removeDateValues], function (err, resu) {
            if (err) {
              throw err;
            }
            var poundsList = resu.rows;
            console.log('Here is just pounds!');
            console.log(poundsList[0].pounds);
            //loop to update each row of pounds with that particular date. 
            poundsList.forEach(function (item, i) {
              id = poundsList[i].id;
              console.log("--------------------------------------------------");
              console.log("Id: " + id);
              console.log("Pounds: " + poundsList[i].pounds);
              addPrice = (poundsList[i].pounds * result.rows[0].price).toFixed(2);
              console.log("Total Price calculated: " + addPrice);
              //call function to update rows. 
              updatePrice();
            })
          });
        }
        //price is not found for that particular date. 
        else {
          updatePriceToZero();
        }

        function updatePrice() {
          client.query("update orders set price=$1 where id=$2;", [addPrice, id], function (err, res) {
            if (err) {
              throw err;
            }
          })
        }

        function updatePriceToZero() {
          //addPrice is set to 0.00
          client.query("update orders set price=$1 where saledate=$2;", [addPrice, removeDateValues], function (err, res) {
            console.log("inside update query with value of addPrice: ", addPrice);
            if (err) {
              throw err;
            }
          })
        }
      });
    });
  });
});