import { accountModel } from '../models/account.model.js';
import { userModel } from '../models/customer.model.js';

export async function createAccountController(req, res) {
  const { accountNumber, balance, userId } = req.body;

  if (!accountNumber || !userId) {
    return res.status(400).json({
      message: 'Both accountNumber and userId are required',
    });
  }

  try {
    const userExists = await userModel.findById(userId);
    if (!userExists) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const accountExists = await accountModel.findOne({ accountNumber, userId });
    if (accountExists) {
      return res.status(400).json({
        message: 'An account already exists for this user',
      });
    }

    const account = await accountModel.create({
      accountNumber,
      balance: balance !== undefined ? balance : 0,
      userId,
    });

    return res.status(201).json({
      message: 'Account created successfully',
      account,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
}

export async function deleteAccountController(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Account ID is required',
    });
  }

  try {
    const deletedAccount = await accountModel.findByIdAndDelete(id);
    if (!deletedAccount) {
      return res.status(404).json({
        message: 'Account not found',
      });
    }

    return res.status(200).json({
      message: 'Account deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
}

export async function getAccountsByUserController(req, res) {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      message: 'User ID is required',
    });
  }

  try {
    const userExists = await userModel.findById(userId);
    if (!userExists) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const accounts = await accountModel.find({ userId });

    return res.status(200).json({
      message: 'Accounts fetched successfully',
      accounts,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
}
