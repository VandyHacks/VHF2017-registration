angular
  .module('app', [
    'ui.router'
  ])
  .config([
    '$httpProvider',
    function($httpProvider) {
      // Add auth token to Authorization header
      $httpProvider.interceptors.push('AuthInterceptor');
    }])
  .run([
    'AuthService',
    'Session',
    function(AuthService, Session) {
      // Startup, login if there's  a token.
      const token = Session.getToken();
      if (token) {
        AuthService.loginWithToken(token);
      }
    }
  ]);
