const db = require('../models');
const Food = db.food;
const Op = db.Sequelize.Op;

// Create and Save a new Food
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Food
  const food = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  };

  // Save Food in the database
  Food.create(food)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Food.',
      });
    });
};

// Retrieve all Foods from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? {
        [Op.or]: [
          { title: { [Op.like]: `%${title}%` } },
          { category: { [Op.like]: `%${title}%` } },
        ],
      }
    : null;

  Food.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Foods.',
      });
    });
};

// Find a single Food with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Food.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Food with id=' + id,
      });
    });
};

// Update a Food by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Food.update(req.body, {
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Food was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Food with id=${id}. Maybe Food was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Food with id=' + id,
      });
    });
};

// Delete a Food with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Food.destroy({
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Food was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Food with id=${id}. Maybe Food was not found!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Food with id=' + id,
      });
    });
};

// Delete all Foods from the database.
exports.deleteAll = (req, res) => {
  Food.destroy({
    where: {},
    truncate: false,
  })
    .then(nums => {
      res.send({ message: `${nums} Foods were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Foods.',
      });
    });
};
