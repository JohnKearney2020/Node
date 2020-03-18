'use strict';
module.exports = (sequelize, DataTypes) => {
  const blogs = sequelize.define('blogs', {
    title: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    body: DataTypes.STRING,
    date_pub: DataTypes.DATE
  }, {});
  blogs.associate = function(models) {
    // associations can be defined here. The foreignKey object is optional, but needed if you want to specify your
    //foreign key instead of using the default sequelize gives you
    blogs.belongsTo(models.author, {foreignKey: 'author_id'}); //a blog has an author. The foreign key is on the blog and points back to the author
    blogs.belongsTo(models.categories, {foreignKey: 'category_id'});// a blog can have one or more categories, each is a foreign key pointing back to those categories
  };
  return blogs;
};





