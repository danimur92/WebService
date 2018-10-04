var express = require('express');
var router = express.Router();
const Patient = require('../server/models/patient.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//1. a simple test url to check that all of our files are communicating correctly.
router.get('/test', function (req, res, next) {
    res.send('Greetings from the Test controller!');
});

//2. Creating a patient
router.post('/insert', function(req, res, next) {
  var item = {
    name: req.body.name,
    surname: req.body.surname,
  };
  var data = new Patient(item);
  data.save();
  res.redirect('/');
});

//3. Reading a patient
router.get('/get-data', function(req, res, next) {
  Patient.find()
      .then(function(doc) {
        res.render('index_pat', {items: doc});
      });
});

module.exports = router;
