(function(){
  'use strict';

  function userDetails() {
	  return {
		  restrict: "E",
      replace: true,
		  scope: {
				user: "="  
		  },
		  templateUrl: "src/users/components/user-details/user-details.tpl.html"
	  }
  }
  
  angular.module('users')
  	.directive("userDetails", userDetails);
})();
