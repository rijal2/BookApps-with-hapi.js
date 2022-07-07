const addBookHandler = require('./Handler/addBook');
const viewBooks = require('./Handler/viewAllBook');
const viewById = require('./Handler/viewByIdBook');
const editById = require('./Handler/editBook');
const delBook = require('./Handler/deleteBook');

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

  // Menampilkan buku berdasarkan ID
  {
    method: 'GET',
    path: '/books/{id}',
    handler: viewById,
  },
  // Mengdeit/mengubah isi buku
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editById,
  },
  // Menghapus buku
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: delBook,
  },
];

module.exports = routes;
