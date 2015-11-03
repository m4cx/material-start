/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../Users.ts" />

module Users {
  'use strict';

  class UserDetails implements ng.IDirective {
    static selector: string = "userDetails";
    
    constructor() {
      return <ng.IDirective>{
        restrict: "E",
        scope: {
          user: "="
        },
        templateUrl: "src/users/components/user-details/user-details.tpl.html"
      };
    }
  }

  ngModule.directive(UserDetails.selector, [UserDetails]);
}
