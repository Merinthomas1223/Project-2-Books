const Book = require('../models/book');

module.exports = {
  create
};

async function create(req,res) {
  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const book = await Book.findById(req.params.id);

    // Save any changes made to the book doc
    book.reviews.push(req.body);
    await book.save();
    res.redirect(`/books/${book._id}`);

  } catch (err) {
    res.status(500).json(err)
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
}

