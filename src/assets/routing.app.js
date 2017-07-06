var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/dashboard", {
            //templateUrl: "view/dashboard.html"
            template: "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
        })
        .when("/mytable", {
            templateUrl: "view/mytable.html"
        })
        .otherwise({
            templateUrl: "<h1>Nothing</h1><p>Nothing has been selected</p>"
        });
});


//templateUrl for page
//template for content