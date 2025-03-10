// Create web server
// Create comments array
// Create routes for adding comments
// Create routes for listing comments

// Create web server
const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());

// Create comments array
const comments = [];

// Create routes for adding comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

// Create routes for listing comments
app.get('/comments', (req, res) => {
  res.send(comments);
});
