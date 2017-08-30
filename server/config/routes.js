var path = require('path');
var Users = require('./../controllers/users.js');
var Questions = require('./../controllers/questions.js');
var Comments = require('./../controllers/comments.js');

module.exports  = function(app){
  app.post('/api/users', Users.create);
  app.get('/api/current_user', Users.getCurrent);
  app.get('/api/dash', Users.dash);
  app.get('/api/dash', Questions.getAll);
  app.get('/api/addq', Questions.dash);
  app.post('/api/addq', Questions.create);
  app.get('/api/comments', Comments.getAll);
  app.post('/api/addc', Comments.create);

  // app.get('/api/dashboard/bids', Items.bids);
  // app.post('/api/newBid', Items.addBid);
  // app.get('/api/dashboard/results', Items.results);
  app.get('/api/logout', Users.logout);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./mBelt/dist/index.html"))
  });
};
