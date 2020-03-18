'use strict';
module.exports = (sequelize, DataTypes) => {
  const testtable = sequelize.define('testtable', {
    title: DataTypes.STRING,
    isValid: DataTypes.BOOLEAN,
    count: DataTypes.INTEGER
  }, {});
  testtable.associate = function(models) {
    // associations can be defined here
  };
  return testtable;
};