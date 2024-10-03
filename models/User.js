module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // optional, to enforce unique emails
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at", // corrected from 'fields' to 'field'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at", // corrected from 'fields' to 'field'
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

  return User;
};
