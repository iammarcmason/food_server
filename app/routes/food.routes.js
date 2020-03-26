module.exports = app => {
  const food = require('../controllers/food.controller.js');

  var router = require('express').Router();

  // Create a new Food
  router.post('/', food.create);

  // Retrieve all food
  router.get('/', food.findAll);

  // Retrieve a single Food with id
  router.get('/:id', food.findOne);

  // Update a Food with id
  router.put('/:id', food.update);

  // Delete a Food with id
  router.delete('/:id', food.delete);

  // Create a new Food
  router.delete('/', food.deleteAll);

  app.use('/api/food', router);
};
