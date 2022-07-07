const books = require('../books');

const delBook = (request, h) => {
  const { id } = request.params;

  const book = books.findIndex((b) => b.id === id);

  if (book !== -1) {
    books.splice(book, 1);

    const res = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });

    res.code(200);
    return res;
  }

  const res = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });

  res.code(404);
  return res;
};

module.exports = delBook;
