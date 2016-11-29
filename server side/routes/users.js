var express = require('express');
var router = express.Router();

var Trip = require('../models/trip.js');

/* GET users listing. */
router.get('/api/gettrpis', function(req, res, next) {

  Trip.find({}, function(err, results){
    if(err) throw err;
    res.json(results);
  });

});

router.get('/api/settrpis', function(req, res, next) {

  var trip = new Trip({
    title: "Swiming",
    date: new Date(),
    location: "Jerusalem"
  });

  trip.save(function(err){
    if(err){
      console.log("Error.");
      res.send("Error");
    }else{
      console.log("Okay.");
      res.send("Okay");
    }
  });
});

module.exports = router;
