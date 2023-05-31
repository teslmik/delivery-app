import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import router from './routers/index';

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_DB_URI as string;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const Conection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecteing the database', error);
  }
}

const start = async () => {
  try {
    Conection();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();