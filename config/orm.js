// Import MySQL connection.
var connection = require("../config/connection.js");



var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  	
  update: function(tableInput,condition, cb){
  	var queryString = 'UPDATE ' + tableInput +' SET devoured = true WHERE id=' +condition+ ';';

  	console.log(queryString);
  	connection.query(queryString, function(err,result){
  		if (err) {
  			throw err;
  		}
  		cb(result);
  	});
  },




  	create: function(tableInput,val,cb){
  		var queryString = 'INSERT INTO ' + tableInput +" (burger_name) VALUES('"+val+"');";

  		console.log(queryString);
  		connection.query(queryString, function(err,result){
  		if (err) {
  			throw err;
  		}
  		cb(result);
  	});
  }
}





 module.exports =orm;