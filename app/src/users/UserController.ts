/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="UserService.ts" />

module Users {
  
  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  class UserController {

    public selected: IUser;
    public users: IUser[];

    constructor(
      private userService: IUserService,
      private $mdSidenav: angular.material.ISidenavService,
      private $mdBottomSheet: angular.material.IBottomSheetService,
      private $log: angular.ILogService,
      private $q: angular.IQService) {
      
      // Load all registered users
      userService
        .loadAllUsers()
        .then((users) => {
          this.users = [].concat(users);
          this.selected = users[0];
        });

    }
    
    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    public toggleUsersList() {
      if (!this.$mdBottomSheet.hide()) {

        var pending = this.$q.when(true);
        pending.then(function() {
          this.$mdSidenav('left').toggle();
        });
      }
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    public selectUser(user) {
      this.selected = user;
      //this.toggleList();
    }

    /**
     * Show the bottom sheet
     */
    public showContactOptions($event) {
      var user = this.selected;

      /**
       * Bottom Sheet controller for the Avatar Actions
       */
      class ContactPanelController {
        static $inject = ['$mdBottomSheet'];

        public user: IUser;
        public actions: any[];

        constructor(private $mdBottomSheet) {
          this.user = user;
          this.actions = [
            { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
            { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
            { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
            { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
          ];
        }

        public submitContact(action) {
          this.$mdBottomSheet.hide(action);
        };
      }

      return this.$mdBottomSheet.show({
        parent: <JQuery>angular.element(document.getElementById('content')),
        templateUrl: './src/users/view/contactSheet.html',
        controller: ContactPanelController,
        controllerAs: "cp",
        //bindToController: true,
        targetEvent: $event
      }).then((clickedItem) => {
        clickedItem && this.$log.debug(clickedItem.name + ' clicked!');
      });


    }

  }

  angular
    .module('users')
    .controller('UserController', [
      'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
      UserController
    ]);
}