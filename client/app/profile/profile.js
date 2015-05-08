/*
* @Author: VINCE
* @Date:   2015-05-08 11:11:52
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-11 10:56:02
*/

'use strict';
(function (angular, _) {

  /**
   * Sets viewstate for profile page
   * @param {[angular]} $stateProvider
   */
  var ProfileConfig = function($stateProvider) {

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.tpl.html',
        controller: ProfileCtrl
      });
  };

  /**

   * Controls login and signup for client side. Has
   * states for login and signup.
   * @param {angular} $scope
   */
  var ProfileCtrl = function ($scope, $window, $state, AuthFactory) {
    $scope.foo = 'bar';
  };

  // Entry point for module
  angular

    .module('trybe-app.profile', ['trybe-app.common'])

    .config(ProfileConfig)

    .controller('ProfileCtrl', ProfileCtrl);

})(angular, _);
