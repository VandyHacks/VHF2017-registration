angular.module('app')
  .factory('AuthInterceptor', [
    'Session',
    function(Session) {
      return {
        request: function(config) {
          const token = Session.getToken();
          if (token) {
            config.headers['x-access-token'] = token;
          }
          return config;
        }
      };
    }
  ]);
