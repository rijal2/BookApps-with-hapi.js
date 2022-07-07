const { nanoid } = require('nanoid');
const books = require('../books');

const addBookHandler = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const insertedAt = new Date().toISOString();
  const id = nanoid(16);
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: pageCount === readPage,
    insertedAt,
    updatedAt: insertedAt,
  };

  if (!name) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });

    res.code(400);
    return res;
  }
  if (readPage > pageCount) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });

    res.code(400);
    return res;
  }

  books.push(newBook);
  const book = books.filter((b) => b.id === id).length > 0;

  if (book) {
    const res = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });

    res.code(201);
    return res;
  }

  const res = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });

  res.code(500);
  return res;
};

module.exports = addBookHandler;
