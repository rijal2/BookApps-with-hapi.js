const addBookHandler = require('./Handler/addBook');

const routes = [
  // Menyimpan Buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

];

module.exports = routes;
