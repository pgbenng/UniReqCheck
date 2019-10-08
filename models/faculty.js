'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define('Faculty', {
    name: DataTypes.TEXT,
    reqs: DataTypes.TEXT,
    uniId: DataTypes.INTEGER
  }, {});
  Faculty.associate = function(models) {
    // associations can be defined here
    Faculty.belongsTo(models.University,{foreignKey:'uniId'})
  };
  return Faculty;
};