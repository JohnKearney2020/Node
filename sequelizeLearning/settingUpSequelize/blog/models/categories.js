'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    categories.hasMany(models.blogs, {foreignKey: 'category_id'}); //a single category can contain many blogs
  };
  return categories;
};





