var mongoose = require('mongoose');
var QuestionSchema = mongoose.Schema({
  title: {type: String, required: true, minlength:10},
  description: {type: String, required: false},
  likes: {type: Number, required: false}
  },
  {timestamps: true});
mongoose.model('Question', QuestionSchema);
