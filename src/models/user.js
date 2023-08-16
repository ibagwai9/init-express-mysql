module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    accessTo: DataTypes.STRING,
    position: DataTypes.STRING,
    department: DataTypes.STRING,
    accessToDept: DataTypes.STRING,
    accessToFiles: DataTypes.STRING,
    token: DataTypes.STRING,
    signature: DataTypes.STRING,
  },{
    tableName:'users'
  });

  User.associate = function (models) {
    // associations go here
  };

  return User;
};
