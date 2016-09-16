var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findAll = function(req, res){
  User.find({}, function(err, results) {
    console.log(results);
		return res.send(results);
	});
};

exports.import = function(req, res){
  User.create(
    { "name": "Ben", "password": "abc" },
    { "name": "Mike D.", "password": "abc" },
    { "name": "Eric", "password": "abc" },
    { "name": "Paul", "password": "abc" }
  , function (err) {
    console.log("Erro: "+err);
    if (err) return console.log(err);
    return res.send(202);
  });
};

exports.findById = function(req, res) {
  console.log(req.params['id']);
  User.findOne({ "name": new RegExp("^"+req.params['id']+"$", "i") }, function (err, results) {
    return res.send(results);
  });
};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};