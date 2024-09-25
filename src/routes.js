const { addBooks, getAllBooks, getBooksById, editBooksById, deleteBooksById } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooks,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksById,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksById,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksById,
    },
   ];
    
   module.exports = routes;