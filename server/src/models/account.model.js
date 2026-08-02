import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'account name is required'],
      trim: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'user reference is required'],
    },
  },
  {
    timestamps: true,
  }
);

export const accountModel = mongoose.model('account', accountSchema);
