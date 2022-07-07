const books = require('../books');

const editById = (request, h) => {
  const { id } = request.params;
  const insertedAt = new Date().toISOString();
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;

  if (!name) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });

    res.code(400);
    return res;
  }

  if (readPage > pageCount) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });

    res.code(400);
    return res;
  }

  const book = books.findIndex((b) => b.id === id);
  if (book !== -1) {
    books[book] = {
      ...books[book],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      insertedAt,
      updatedAt: insertedAt,
    };
    const res = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });

    res.code(200);
    return res;
  }

  const res = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });

  res.code(404);
  return res;
};

module.exports = editById;
