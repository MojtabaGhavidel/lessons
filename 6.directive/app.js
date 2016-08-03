var app = angular.module("myApp", []);
app.controller('customersCtrl', function($scope) {
	$scope.names = [ {
		"Name":"Alfreds Futterkiste","Age":"Berlin","Country":"25"},
		{"Name":"Ana Trujillo Emparedados y helados","Age":"México D.F.","Country":"19"},
		{"Name":"Antonio Moreno Taquería","Age":"México D.F.","Country":"19"},
		{"Name":"Around the Horn","Age":"London","Country":"21"},
		{"Name":"B's Beverages","Age":"London","Country":"19"},
		{"Name":"Berglunds snabbköp","Age":"Luleå","Country":"23"},
		{"Name":"Blauer See Delikatessen","Age":"Mannheim","Country":"25"},
		{"Name":"Blondel père et fils","Age":"Strasbourg","Country":"32"},
		{"Name":"Bólido Comidas preparadas","Age":"Madrid","Country":"41"},
		{"Name":"Bon app'","Age":"Marseille","Country":"32"},
		{"Name":"Bottom-Dollar Marketse","Age":"Tsawassen","Country":"26"},
		{"Name":"Cactus Comidas para llevar","Age":"Buenos Aires","Country":"17"},
		{"Name":"Centro comercial Moctezuma","Age":"México D.F.","Country":"19"},
		{"Name":"Chop-suey Chinese","Age":"Bern","Country":"29"},
		{"Name":"Comércio Mineiro","Age":"São Paulo","Country":"22"} ] ;
});

