module.exports = (sequelize, Sequelize) => {
  const Food = sequelize.define('food', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
  });

  return Food;
};
