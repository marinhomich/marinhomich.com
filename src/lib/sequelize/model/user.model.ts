import { DataTypes, Sequelize } from "sequelize"

import { sequelize } from "@/lib/sequelize"

export const User = sequelize.define(
  "User",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)
