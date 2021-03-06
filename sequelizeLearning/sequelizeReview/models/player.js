'use strict';
module.exports = (sequelize, DataTypes) => {
	const player = sequelize.define(
		'player',
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			age: DataTypes.INTEGER
		},
		{}
	);
	player.associate = function(models) {
		//adding 'models' here gives us access to any of the models in that folder
		// associations can be defined here
		models.player.belongsTo(models.team); //a player belongs to a team
	};
	return player;
};
