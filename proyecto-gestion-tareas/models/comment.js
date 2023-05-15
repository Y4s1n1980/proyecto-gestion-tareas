const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // Otros campos necesarios para el comentario
  timestamp: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

module.exports = mongoose.model('Comment', commentSchema);





