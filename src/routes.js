const addBookHandler = require('./Handler/addBook');
const viewBooks = require('./Handler/viewAllBook');
const viewById = require('./Handler/viewByIdBook');
const editById = require('./Handler/editBook');

const routes = [
  // Menyimpan / Menambah Buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // Menampilkan buku berdasarkan ID
  {
    method: 'GET',
    path: '/books/{id}',
    handler: viewById,
  },
  // Menampilkan seluruh Buku
  {
    method: 'GET',
    path: '/books',
    handler: viewBooks,
  },
  // Mengdeit/mengubah isi buku
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editById,
  },

];

module.exports = routes;
