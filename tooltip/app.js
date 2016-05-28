var app = angular.module("myApp", [

]);
app.controller('customersCtrl', function($scope) {
	$scope.exclamation = "!!!"
});
app.directive("bttooltip", function() {
    return {
        template : '"hi :w
{{customersCtrl}}'
    };
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
