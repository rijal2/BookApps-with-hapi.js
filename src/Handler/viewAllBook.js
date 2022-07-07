/* eslint-disable no-console */
const books = require('../books');

const viewBooks = (request, h) => {
  const { name, reading, finished } = request.query;
  let allBook = [...books];

  if (name !== undefined) {
    allBook = allBook.filter((n) => n.name.toLowerCase().includes(name.toLowerCase()));
    const view = allBook.map((m) => ({
      id: m.id,
      name: m.name,
      publisher: m.publisher,
    }));

    const res = h.response({
      status: 'success',
      data: {
        books: view,
      },

    });
    res.code(200);
    return res;
  }

  if (reading !== undefined) {
    allBook = allBook.filter((r) => r.reading === (reading === '1'));
    const view = allBook.map((m) => ({
      id: m.id,
      name: m.name,
      publisher: m.publisher,
    }));

    const res = h.response({
      status: 'success',
      data: {
        books: view,
      },

    });
    res.code(200);
    return res;
  }

  if (finished !== undefined) {
    allBook = allBook.filter((f) => f.finished === (finished === '1'));
    const view = allBook.map((m) => ({
      id: m.id,
      name: m.name,
      publisher: m.publisher,
    }));
    const res = h.response({
      status: 'success',
      data: {
        books: view,
      },

    });
    res.code(200);
    return res;
  }

  const view = books.map((m) => ({
    id: m.id,
    name: m.name,
    publisher: m.publisher,
  }));

  const res = h.response({
    status: 'success',
    data: {
      books: view,
    },
  });

  res.code(200);
  return res;
};

module.exports = viewBooks;
