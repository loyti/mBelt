var mongoose = require('mongoose');
var CommentSchema = mongoose.Schema({
  title: {type: String, required: true, minlength:5},
  support: {type: String, required: false},
  likes: {type: Number, required: false}
  },
  {timestamps: true});
mongoose.model('Comment', CommentSchema);
