import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';

export const initMongoConnection = async () => {
  const user = env(ENV_VARS.MONGODB_USER);
  const pwd = env(ENV_VARS.MONGODB_PASSWORD);
  const url = env(ENV_VARS.MONGODB_URL);
  const db = env(ENV_VARS.MONGODB_DB);
  const connectionLink = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`;
  console.log(connectionLink);
  try {
    await mongoose.connect(connectionLink);
    console.log('Successfully established database connection!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
