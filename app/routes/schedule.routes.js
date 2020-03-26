module.exports = app => {
  const schedule = require('../controllers/schedule.controller.js');

  var router = require('express').Router();

  // Create a new Food
  router.post('/', schedule.create);

  // Retrieve all schedule
  router.get('/', schedule.findAll);

  // Retrieve a single Food with id
  router.get('/:id', schedule.findOne);

  // Update a Food with id
  router.put('/:id', schedule.update);

  // Delete a Food with id
  router.delete('/:id', schedule.delete);

  // Create a new Food
  router.delete('/', schedule.deleteAll);

  app.use('/api/schedule', router);
};
