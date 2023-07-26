const Book = require('../models/book');

module.exports = {
  new: newBook,
  create,
  index,
  show,
};

async function index(req, res) {
  try {
    const books = await Book.getAll();
    res.render('books/index', { books });
  } catch (err) {
    res.render('error', { errorMsg: err.message });
  }
}
function newBook(req, res) {
  res.render('books/new', {errorMsg: ''});
}

async function create(req,res) {

  try {
    await Book.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the book index after we implement it
    res.redirect('/books');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('books/new', { errorMsg: err.message });
  }
}

async function show(req, res) {
  const book = await Book.findById(req.params.id);
  res.render('books/show', { title: 'Book Detail', book});
}
