app.post('/addPrices', function (req, res) {
  console.log("Pulling the date from database for add prices MR.: ");
  console.log(req.body);

  var saledate = req.body.saledate;
  var price = req.body.price;
  var newDate = new Date(saledate);
  var day = newDate.getDate();
  var month = newDate.getMonth() + 1;
  var year = newDate.getFullYear();

  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }
  var newDate = month + '/' + day + '/' + year;
  saledate = newDate;
  console.log("here is my new date: " + saledate);

  //SQL DATABASE
  client.connect(function (err) {
    console.log("Database connected for setPrices!");
    client.query("insert into prices (saledate, price) values ($1, $2);", [saledate, price], function (err, result, fields) {
      console.log(result.rows);
      if (err) {
        throw err;
      }
      console.log("here is sale date before query for orders table: " + saledate);
      //update the order table with the prices! CREATE A NEW FUNCTION CALLED updateOrders
      client.query("select id, pounds, saledate from orders where saledate=$1;", [saledate], function (err, resu) {
        if (err) {
          throw err;
        }
        console.log("into update query");
        console.log(resu.rows);
        var poundsList = resu.rows;
        console.log('Here is just pounds!');
        console.log('Right before foreach loop for orders query');
        poundsList.forEach(function (item, i) {
          var id = poundsList[i].id;
          console.log("Id: " + id);
          console.log("Pounds: " + poundsList[i].pounds);
          var totalPrice = (poundsList[i].pounds * price).toFixed(2);
          console.log("Total Price of it: " + totalPrice);

          //insert into orders table
          client.query("update orders set price=$1 where id=$2;", [totalPrice, id], function (err, res) {
            if (err) {
              throw err;
            }
            console.log("inside query to insert");
          })
        })
      });
    });
    console.log("End of the function!");
    res.end;
  });
});

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
    client.query("delete from prices where saledate=$1;", [removeDateValues], function (err, result, fields) {
      if (err) {
        throw err;
      }
      //set prices to 0.00 for those dates.
      client.query("update orders set price=0.00 where saledate=$1;", [removeDateValues], function (err, res) {
        if (err) {
          throw err;
        }
      })
    });
  });
});