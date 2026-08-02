import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'name is required'],
  },
  email: {
    type: String,
    require: [true, 'email is required'],
  },
});

export const userModel = mongoose.model('user', userSchema);
