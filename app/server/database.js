const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

const bookshelf = require('bookshelf')(knex);
const validator = require('validator');

bookshelf.plugin('visibility');
bookshelf.plugin('bookshelf-validate', {
  validator,
  validateOnSave: true
});

module.exports = bookshelf;
