var db = require('./db');

module.exports = {
  getAll: function (callback) {
    let queryString = 'SELECT * FROM movies';
    db.query(queryString, (error, results) => {
      callback(error, results);
    });
  },
  create: function(params, callback) {
    let queryString = 'INSERT into movies (moviename, watched) VALUES (?, ?)';
    let queryParams = [params.movie, params.watched];
    db.query(queryString, queryParams, (error, results) => {
      callback(error, results);
    });
  },
  edit: function(params, callback) {
    let queryString = `UPDATE movies SET watched = NOT watched WHERE moviename = '${params.movie}'`;
    console.log('this is it', params);
    db.query(queryString, (error, results) => {
      callback(error, results);
    });
  },
  delete: function(params, callback) {
    let queryString = `DELETE FROM movies WHERE moviename = '${params.movie}'`;
    db.query(queryString, (error, results) => {
      callback(error, results);
    });
  }
};