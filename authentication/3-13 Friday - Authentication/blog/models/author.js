'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    // associations can be defined here
    author.hasMany(models.blogs, {foreignKey: 'author_id'}); //an author can have many blogs
    // author.hasMany(models.dctest, {foreignKey: 'author_id'});
  };
  return author;
};



