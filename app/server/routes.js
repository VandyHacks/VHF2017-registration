const User = require('./models/User');

module.exports = function(app) {
  // Application ------------------------------------------
  app.get('/', (req, res) => {
    res.sendfile('./app/client/index.html');
  });

  app.get('/mlh', (req, res) => {
    res.redirect('https://my.mlh.io/oauth/authorize?client_id=' +
    process.env.MLH_APP_ID +
    '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=token&scopes=email+phone_number+demographics+birthday+education+event');
  });

  // Wildcard all other GET requests to the angular app
  app.get('*', (req, res) => {
    res.sendfile('./app/client/index.html');
  });
};
