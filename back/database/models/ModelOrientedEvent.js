'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModelOrientedEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ModelOrientedEvent.belongsTo(models.ModelEvent, {
        foreignKey: 'id',
        targetKey: 'EventId'
    }),
    ModelOrientedEvent.belongsTo(models.ModelOriented, {
      foreignKey: 'id',
      targetKey: 'OrientedId'
  })
    }
  }
  ModelOrientedEvent.init({

  },{
      sequelize,
      freezeTableName: true,
      modelName: 'oriented_event'
  });
  return ModelOrientedEvent;
};
