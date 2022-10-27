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
      timestamps: false, // Breaks everything
      paranoid: true,
    }
  );
  return ModelOrientedEvent;
};
