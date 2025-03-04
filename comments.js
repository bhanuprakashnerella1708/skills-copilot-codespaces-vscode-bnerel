// Create web server
// Define the port
const port = 3000;
// Import the express module
const express = require('express');
// Create an express application
const app = express();
// Import the body-parser module
const bodyParser = require('body-parser');
// Import the comments module
const comments = require('./comments');
// Add the body-parser middleware to the express application
app.use(bodyParser.json());
// Define a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});
// Define a route to get a comment by its id
app.get('/comments/:id', (req, res) => {
    const comment = comments.getComment(req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});
// Define a route to create a new comment
app.post('/comments', (req, res) => {
    const comment = comments.createComment(req.body);
    res.json(comment);
});
// Define a route to update a comment by its id
app.put('/comments/:id', (req, res) => {
    const comment = comments.updateComment(req.params.id, req.body);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});
// Define a route to delete a comment by its id
app.delete('/comments/:id', (req, res) => {
    const comment = comments.deleteComment(req.params.id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});
// Start the web server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



