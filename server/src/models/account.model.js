import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    accountNumber: {
      type: String,
      required: [true, 'account number is required'],
      trim: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const accountModel = mongoose.model('account', accountSchema);
