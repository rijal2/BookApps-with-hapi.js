/* eslint-disable no-console */
const books = require('../books');

const viewById = (request, h) => {
  const { id } = request.params;
  const book = books.findIndex((b) => b.id === id);

  if (book !== -1) {
    const res = h.response({
      status: 'success',
      data: {
        book: books[book],
      },
    });
    res.code(200);
    return res;
  }

  const res = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  res.code(404);
  return res;
};

module.exports = viewById;
