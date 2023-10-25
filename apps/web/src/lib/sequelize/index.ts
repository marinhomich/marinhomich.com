import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
  dialect: "mysql",
  dialectModule: require("mysql2"),
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})
