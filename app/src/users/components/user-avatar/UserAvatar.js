(function(){
  'use strict';

  function userAvatar() {
	  return {
		  restrict: "E",
      replace: true,
		  scope: {
				user: "="  
		  },
		  templateUrl: "src/users/components/user-avatar/user-avatar.tpl.html"
	  }
  }
  
  angular.module('users')
  	.directive("userAvatar", userAvatar);
})();
