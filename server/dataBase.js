import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.User_Database_url.trim(), config);

export default sequelize;