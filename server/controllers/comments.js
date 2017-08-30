var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = {

  create: (req,res) => {
    console.log('create');
    console.log(req.body);
    Comment.findOne({title: req.body.title}).exec((err,comment)=>{
      if(comment){
        console.log('comment already in db, updating values')
        comment.title = req.body.title;
        comment.save((err, savedC)=>{
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('updated existing comment, adding to db');
            req.session.userId = savedUser._id;
            req.session.username = savedQ.username;
            console.log('Comment updated: ', req.session)
            res.json(savedC);
          }
        })
      } else {
        console.log('comment not in db, creating new comment');
        var newC = new Comment({title: req.body.title});
        newC.save((err,savedC) => {
          if (err){
            console.log('something went wrong');
            res.json(err);
          } else {
            console.log('created new comment, adding to db');
            req.session.title = savedC;
            console.log('comment updated: ', req.session);
            res.json(savedC);
          }
        })
      }
    })
  },

  getAll: (req,res) => {
    Comment.find({title: req.session.title}, (err, foundC)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('comments found');
        console.log(foundC);
        res.json(foundC);
      }
    })
  },

  dash: (req, res) => {
    console.log("in comments dash");
    Comment.find({}).exec((err,comments)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("found comments", comments);
				res.json(comments);
			}
		})
  },

}
