const db = require('../models')

module.exports = { 
  findAll: function(req, res){
    console.log('finding books')
    db.Book
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({msg: err}))
  },
  create: function({ body }, res){
    console.log('adding book')
    console.log(body)
    db.Book
      .create(body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({msg: err}))
  }, 
  remove: function({ params: { id }}, res){
    console.log('removing book')
    db.Book
      .deleteOne({_id: id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({msg: err}))
  }
}