import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 4000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/capacitaciones',
  JWT_SECRET: process.env.JWT_SECRET || 'secreto',
  JWT_EXPIRES: process.env.JWT_EXPIRES || '2d',
};
