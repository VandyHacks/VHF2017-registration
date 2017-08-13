angular.module('app')
  .controller('TeamCtrl', [
    '$scope',
    'currentUser',
    'settings',
    'Utils',
    'UserService',
    'TEAM',
    function ($scope, currentUser, settings, Utils, UserService, TEAM) {
      // Get the current user's most recent data.
      const Settings = settings.data;

      $scope.regIsOpen = Utils.isRegOpen(Settings);

      $scope.user = currentUser.data;

      $scope.TEAM = TEAM;

      function _populateTeammates() {
        UserService
          .getMyTeammates()
          .success((users) => {
            $scope.error = null;
            $scope.teammates = users;
          });
      }

      if ($scope.user.teamCode) {
        _populateTeammates();
      }

      $scope.createTeam = function () {
        UserService
          .createTeam($scope.code)
          .success((user) => {
            $scope.error = null;
            $scope.user = user;
            _populateTeammates();
          })
          .error((res) => {
            $scope.error = res.message;
          });
      };

      $scope.joinTeam = function () {
        UserService
          .joinTeam($scope.code)
          .success((user) => {
            $scope.error = null;
            $scope.user = user;
            _populateTeammates();
          })
          .error((res) => {
            $scope.error = res.message;
          });
      };

      $scope.leaveTeam = function () {
        UserService
          .leaveTeam()
          .success((user) => {
            $scope.error = null;
            $scope.user = user;
            $scope.teammates = [];
          })
          .error((res) => {
            $scope.error = res.data.message;
          });
      };
    }]);
