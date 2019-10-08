'use strict';
module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define('University', {
    name: DataTypes.TEXT
  }, {});
  University.associate = function(models) {
    // associations can be defined here
    University.hasMany(models.Faculty,{foreignKey:"uniId"})
  };
  return University;
};