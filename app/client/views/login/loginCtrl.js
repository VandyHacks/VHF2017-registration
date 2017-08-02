angular.module('app')
  .controller('LoginCtrl', [
    '$scope',
    '$http',
    '$state',
    'settings',
    'Utils',
    'AuthService',
    function ($scope, $http, $state, settings, Utils, AuthService) {
      // Is registration open?
      const Settings = settings.data;
      $scope.regIsOpen = Utils.isRegOpen(Settings);

      // Start state for login
      $scope.loginState = 'login';

      let url = AuthService.getAddress();
      let pw = Utils.getToken(url);
      if (pw !== null && pw !== "") {
        $scope.password = pw;
        $http.get('https://my.mlh.io/api/v2/user.json?access_token='+pw).then(function (response) {
          $scope.email = response.data.data.email;
          $scope.error = "Click on Register to complete the process!"
        });
      }

      function onSuccess() {
        $state.go('app.dashboard');
      }

      function onError(data) {
        $scope.error = data.message;
      }

      function resetError() {
        $scope.error = null;
      }

      $scope.login = function () {
        resetError();
        AuthService.loginWithPassword(
          $scope.email, $scope.password, onSuccess, onError);
      };

      $scope.register = function () {
        resetError();
        AuthService.register(
          $scope.email, $scope.password, onSuccess, onError);
      };

      $scope.loginWithMlh = function () {
        resetError();
        AuthService.loginWithMlh(onSuccess, onError);
      };

      $scope.setLoginState = function (state) {
        $scope.loginState = state;
      };

      $scope.sendResetEmail = function () {
        const email = $scope.email;
        AuthService.sendResetEmail(email);
        sweetAlert({
          title: "Don't Sweat!",
          text: 'An email should be sent to you shortly.',
          type: 'success',
          confirmButtonColor: '#e76482'
        });
      };
    }
  ]);
