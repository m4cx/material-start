/// <reference path="../../../../../typings/tsd.d.ts" />

module Users {
  'use strict';

  class UserDetails implements ng.IDirective {
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

  angular.module('users')
    .directive("userDetails", [UserDetails]);
}
