const addBookHandler = require('./Handler/addBook');
const viewBooks = require('./Handler/viewAllBook');

const routes = [
  // Menyimpan / Menambah Buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // Menampilkan seluruh Buku
  {
    method: 'GET',
    path: '/books',
    handler: viewBooks,
  },

];

module.exports = routes;
