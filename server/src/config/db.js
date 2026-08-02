import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ledger');
    console.log('DB Connected Successfully');
  } catch (err) {
    console.error('Error connecting DB:');
    throw err;
  }
}
