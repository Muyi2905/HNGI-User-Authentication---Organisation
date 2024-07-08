'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organisation extends Model {
    static associate(models) {
      Organisation.belongsToMany(models.User, {
        through: 'UserOrganisations',
        foreignKey: 'orgId',
      });
    }
  }
  Organisation.init({
    orgId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Organisation',
  });
  return Organisation;
};