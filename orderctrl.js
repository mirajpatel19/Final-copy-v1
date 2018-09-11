app.controller('orderCtrl', function ($scope, $http) {
    $scope.date = ' ';
    
    // $scope.filter = myService.style();
    $scope.send = function () {
        console.log("inside send function with date: ");
        console.log($scope.data.date);

        var newDate = new Date($scope.data.date);
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
        console.log("here is my new date: " + newDate);

        $scope.saledate = newDate;

        $http.post('/orders', {
                'date': $scope.data.date
            })
            .then(function (response) {
                $scope.orders = response.data;
                $scope.sortField = 'userid';
                $scope.reverse = true;
            })
    }

    $scope.deleteFunc = function (value, key) {
        console.log('Into deleteFunc to delete data on orders.html with Id, index: ');
        console.log(value, key);

        $http.post('/deleteOrder', {
            'id': value
        })
        for (key in $scope.orders) {
            if ($scope.orders[key]['id'] == value) {
                console.log($scope.orders[key]);
                $scope.orders.splice(key, 1);
            }
        }
    }

    $scope.addFunc = function () {
        console.log('Into addFunc to add data on orders.html: ');

        $http.post('/addOrder', {
                'boxnum': $scope.boxnum,
                'saledate': $scope.saledate,
                'variety': $scope.variety,
                'style': $scope.style,
                'size': $scope.size,
                'qty': $scope.qty,
                'pounds': $scope.pounds
            })
            .then(function (response) {
                console.log("here is the response on addorder: ");
                console.log(response.data);
                console.log("into response for addFunc: ");

                $scope.orders.push({
                    'id': response.data.id,
                    'boxnum': $scope.boxnum,
                    'userid': $scope.userid,
                    'empnum': response.data.empnum,
                    'fname': response.data.fname,
                    'lname': response.data.lname,
                    'saledate': $scope.saledate,
                    'variety': $scope.variety,
                    'style': $scope.style,
                    'size': $scope.size,
                    'qty': $scope.qty,
                    'pounds': $scope.pounds
                });

                //Clearing form values
                $scope.id = '';
                $scope.boxnum = '';
                $scope.variety = '';
                $scope.style = '';
                $scope.size = '';
                $scope.qty = '';
                $scope.pounds = '';
            });
    }
});