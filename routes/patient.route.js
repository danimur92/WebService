var express = require('express');
var router = express.Router();

var MongoClient = require('../server/db/mongoose');
var Patient = require('../server/models/patient.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_pat');
});

router.get('/get-data', function(req, res, next) {
  Patient.find()
      .then(function(doc) {
        res.render('index_pat', {items: doc});
      });
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

router.post('/update', function (req, res, next) {
  var id = req.body.id;

  Patient.findById(id, function(err, doc) {
    if (err) {
      console.console.error(('error, no entry found'));
    }
    doc.name = req.body.name;
    doc.surname = req.body.surname;
    doc.save();
  })
  res.redirect('/');
});

router.post('/delete', function (req, res, next) {
  var id = req.body.id;
  Patient.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = router;
