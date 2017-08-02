angular.module('app')
  .factory('Utils', [
    function() {
      return {
        getToken : function(url) {
          let index = url.indexOf("access_token");
          let tokenIndex = url.indexOf("token_type");
          let code = url.substr(index + 13, tokenIndex - index - 14)
          return code;
        },
        isRegOpen: function(settings) {
          return Date.now() > settings.timeOpen && Date.now() < settings.timeClose;
        },
        isAfter: function(time) {
          return Date.now() > time;
        },
        formatTime: function(time) {
          if (!time) {
            return 'Invalid Date';
          }

          const date = new Date(time);
          // Hack for timezone
          return moment(date).format('dddd, MMMM Do YYYY, h:mm a') +
            ' ' + date.toTimeString().split(' ')[2];
        }
      };
    }
  ]);
