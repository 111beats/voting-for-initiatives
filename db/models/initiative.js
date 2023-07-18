const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Initiative.init(
    {
      topic: DataTypes.STRING,
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      total: DataTypes.INTEGER,
      inFavorOf: DataTypes.DECIMAL,
      level: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Initiative",
    }
  );
  return Initiative;
};
