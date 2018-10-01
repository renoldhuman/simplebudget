var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

/* GET users listing. */
router.get('/:userName/:password', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  var uName = req.params.userName;
  var pWord = req.params.password;

  console.log(uName + " " + pWord);

  MongoClient.connect('mongodb+srv://thelmrich:mAngodatabas333@simplebudget-cluster-cn9l5.mongodb.net/SimpleBudget?retryWrites=true', function(err, client){
    if(err){
      throw err;s
    }
    var query = JSON.stringify({username : uName, password: pWord});
    var db = client.db("SimpleBudget");
    var user = db.collection('users').find(query).next(function(err, results){
      console.log(results);
      res.json(results);
    });
    

    client.close();
  });
  // And insert something like this instead:

  // res.send("Hello");
  
});

module.exports = router;
