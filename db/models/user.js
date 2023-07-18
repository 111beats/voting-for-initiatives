const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Initiative }) {
      this.hasMany(Initiative, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      fio: DataTypes.STRING,
      email: DataTypes.STRING,
      adress: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
