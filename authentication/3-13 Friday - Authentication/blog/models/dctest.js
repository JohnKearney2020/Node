'use strict';
module.exports = (sequelize, DataTypes) => {
  const dctest = sequelize.define('dctest', {
    title: DataTypes.STRING,
    isValid: DataTypes.BOOLEAN,
    count: DataTypes.INTEGER
  }, {});
  dctest.associate = function(models) {
    // associations can be defined here
    // dctest.belongsTo(models.author, {foreignKey: author_id})
  };
  return dctest;
};