const Settings = require('../app/server/models/Settings');

Settings
  .findOne({})
  .exec((err, settings) => {
    if (err) {
      throw new Error('Error while initializing settings');
    }
    if (!settings) {
      settings = new Settings();
      settings.save();
    }
  });
