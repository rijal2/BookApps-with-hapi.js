/* eslint-disable no-console */
const books = require('../books');

const viewBooks = (request, h) => {
  const isi = books.length;
  console.log(isi);
  if (isi > 0) {
    const res = h.response({
      status: 'succes',
      data: {
        books,
      },
    });

    res.code(200);
    return res;
  }
  const res = h.response({
    status: 'succes',
    data: {
      books: [],
    },
  });

  res.code(200);
  return res;
};

module.exports = viewBooks;
