app.directive("ghBusiness", function() {
  return {
    template: "<h1>Business Page</h1>"
  };
});
app.directive('ghTooltip',  function(){
    return { 
        link: function(scope, element, attributes){
            $(element).attr('title', attributes.ghTooltip + ' !!!' );
            $(element).attr('data-toggle','tooltip');
            $(element).attr('data-placement','right');
            //reminder //console.log(attributes.anotherParam);
		}
	};
});   
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
}); 
                                 
            
