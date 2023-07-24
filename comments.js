// Create web server
var express = require('express');
var router = express.Router();

// Load model
var Comment = require('../models/comments');

// Load middleware
var auth = require('../middleware/auth');

// Load controller
var commentsController = require('../controllers/comments');

// Routes
router.get('/', commentsController.getComments);
router.post('/', auth, commentsController.postComment);
router.delete('/:id', auth, commentsController.deleteComment);

module.exports = router;