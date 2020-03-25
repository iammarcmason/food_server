module.exports = (sequelize, Sequelize) => {
  const Food = sequelize.define('food', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Food;
};
