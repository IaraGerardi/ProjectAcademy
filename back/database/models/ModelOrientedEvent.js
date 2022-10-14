const { Model } = require("sequelize");

module.exports = (sequelize) => {
  class ModelOrientedEvent extends Model {
    static associate() {
      // define association here
    }
  }
  ModelOrientedEvent.init(
    {},
    {
      sequelize,
      freezeTableName: true,
      modelName: "oriented_event",
      timestamps: true,
      paranoid: true,
    }
  );
  return ModelOrientedEvent;
};
