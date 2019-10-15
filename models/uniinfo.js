'use strict';
module.exports = (sequelize, DataTypes) => {
  const UniInfo = sequelize.define('UniInfo', {
    info: DataTypes.TEXT,
    uniId: DataTypes.INTEGER
  }, {});
  UniInfo.associate = function(models) {
    // associations can be defined here
  };
  return UniInfo;
};