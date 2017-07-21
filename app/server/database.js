const knex = require('knex')({
  client: 'pg',  
  connection: process.env.DATABASE_URL
});

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('visibility');

module.exports = bookshelf;