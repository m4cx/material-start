/// <reference path="../../../../../typings/tsd.d.ts" />

module Users {
  'use strict';

  class UserAvatar implements angular.IDirective {
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

  angular.module('users')
    .directive("userAvatar", [UserAvatar]);
}
