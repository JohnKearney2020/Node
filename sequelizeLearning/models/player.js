'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  player.associate = function(models) {
    // associations can be defined here
    models.player.belongsTo(models.team) //will create a teamID in the player table that links back to
    //the team table
  };
  return player;
};