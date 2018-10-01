var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

/* Post to user. */
router.post('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  var uName = req.body.userName;
  var pWord = req.body.password;


  MongoClient.connect('mongodb+srv://thelmrich:mAngodatabas333@simplebudget-cluster-cn9l5.mongodb.net/SimpleBudget?retryWrites=true', function(err, client){
    if(err){
      throw err;
    }

    var db = client.db("SimpleBudget");

    db.collection('users').insert(
      {username: uName, password: pWord, categories: [], discretionary: 0}
    );
    

    client.close();
  });
  // And insert something like this instead:

  // res.send("Hello");
  
});

module.exports = router;