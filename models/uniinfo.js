'use strict';
module.exports = (sequelize, DataTypes) => {
  const UniInfo = sequelize.define('UniInfo', {
    info: DataTypes.TEXT,
    uniId: DataTypes.INTEGER
  }, {});
  UniInfo.associate = function(models) {
    // associations can be defined here
    UniInfo.belongsTo(models.University,{foreignKey:'uniId'})
  };
  return UniInfo;
};