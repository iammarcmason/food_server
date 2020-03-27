module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define('schedule', {
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

  return Schedule;
};

