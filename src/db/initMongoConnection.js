import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';

export const initMongoConnection = async () => {
  const connectionLink = `mongodb+srv://${env(ENV_VARS.MONGODB_USER)}:${env(
    ENV_VARS.MONGODB_PASSWORD,
  )}@${env(ENV_VARS.MONGODB_URL)}/?retryWrites=true&w=majority&appName=${env(ENV_VARS.MONGODB_DB)}`;
  

  try {
    await mongoose.connect(connectionLink);
    console.log('Successfully established database connection!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
