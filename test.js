let csvContent = "data:text/csv;charset=utf-8,";

$scope.download = () => {
  csvContent += "Employee Number, First Name, Last Name, Total Pounds, Total Amount, Employment Type, Pick Up Status\r\n";
  $scope.orders.forEach((row, id) => {
    console.log($scope.orders[id])
    csvContent += orders.id + ',' + orders.fname + ',' + orders.lname + ',' + orders.pounds + ',' + orders.price + ',' + orders.emptype + ',' + orders.pickupstatus + "\r\n";
  });
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    document.body.appendChild(link); // Firefox requires the link to be in the body
    link.download = $scope.resp + "Pay Roll";
    link.href = encodeURI(csvContent);
    link.click();
    document.body.removeChild(link); // remove the link when done
  } else {
    location.replace(uri);
  }
}