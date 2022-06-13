module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePic: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
  });

  // user associate

  User.associate = (models) => {
    User.hasMany(models.CprCycle, {
      foreignKey: {
        name: "userId",
        allowNull: true,
      },
      constraints: false,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };
  return User;
};
