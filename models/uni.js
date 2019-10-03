'use strict';
module.exports = (sequelize, DataTypes) => {
  const Uni = sequelize.define('Uni', {
    name: DataTypes.TEXT,
    req: DataTypes.TEXT
  }, {});
  Uni.associate = function(models) {
    // associations can be defined here
  };
  return Uni;
};