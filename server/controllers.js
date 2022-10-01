const models = require('./models.js');

module.exports = {
  get: function(req, res) {
    models.getAll((error, results) => {
      if (error) {
        res.sendStatus(404);
      } else {
        res.status(200);
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    models.create(req.body, (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  },
  put: function(req, res) {
    models.edit(req.body, (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  },
  delete: function(req, res) {
    models.delete(req.body, (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  }
};