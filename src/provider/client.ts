import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

export async function startMongoClient() {
    await mongoose.connect(process.env.DATABASE_URL)
};