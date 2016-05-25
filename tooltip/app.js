var app = angular.module("myApp", [

]);
app.controller('customersCtrl', function($scope) {
});
app.directive("bttooltip", function() {
    return {
        template : "<p>Made by a directive!</p>"
    };
});

					$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
