'use strict';
module.exports = (sequelize, DataTypes) => {
  const AboutUs = sequelize.define('AboutUs', {
    text: DataTypes.TEXT
  }, {});
  AboutUs.associate = function(models) {
    // associations can be defined here
  };
  return AboutUs;
};