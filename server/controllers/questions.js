var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {

  create: (req,res) => {
    console.log('create');
    console.log(req.body);
    Question.findOne({title: req.body.title}).exec((err,question)=>{
      if(question){
        console.log('question already in db, updating values')
        question.title = req.body.title;
        question.save((err, savedQ)=>{
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('updated existing question, adding to db');
            req.session.username = savedQ.username;
            console.log('Question updated: ', req.session)
            res.json(savedQ);
          }
        })
      } else {
        console.log('question not in db, creating new question');
        var newQ = new Question({title: req.body.title});
        newQ.save((err,savedQ) => {
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('created new question, adding to db');
            req.session.title = savedQ;
            console.log('question updated: ', req.session);
            res.json(savedQ);
          }
        })
      }
    })
  },

  getAll: (req,res) => {
    Question.find({title: req.session.title}, (err, foundQ)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('questions found');
        console.log(foundQ);
        res.json(foundQ);
      }
    })
  },

  dash: (req, res) => {
    console.log("in questions dash");
    Question.find({}).exec((err,questions)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("found questions", questions);
				res.json(questions);
			}
		})
  },

}
