/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../Users.ts" />

module Users {
  'use strict';

  class UserAvatar implements angular.IDirective {
    static selector: string = "userAvatar";
    
    constructor() {
      return {
        restrict: "E",
        scope: {
          user: "="
        },
        templateUrl: "src/users/components/user-avatar/user-avatar.tpl.html"
      }
    }
  }

  ngModule.directive(UserAvatar.selector, [UserAvatar]);
}
