import { accountModel } from '../models/account.model.js';
import { userModel } from '../models/customer.model.js';

export async function createAccountController(req, res) {
  const { accountNumber, balance } = req.body;

  console.log({balance})

  if (!accountNumber) {
    return res.status(400).json({
      message: 'accountNumber is required',
    });
  }

  try {
    const accountExists = await accountModel.findOne({ accountNumber });
    if (accountExists) {
      return res.status(400).json({
        message: 'An account already exists for this user',
      });
    }

    const account = await accountModel.create({
      accountNumber,
      balance: balance !== undefined ? balance : 0,
    });

    return res.status(201).json({
      message: 'Account created successfully',
      account: {
        accountNumber: account.accountNumber,
        balance: account.balance,
      },
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

export async function depositMoneyController(req, res) {
  const { accountNumber, amount } = req.body;

  if (!accountNumber || !amount) {
    return res.status(400).json({
      message: 'Both account number and amount is required',
    });
  }

  if (amount <= 0) {
    return res.status(400).json({
      message: 'Deposit amount cannot be 0 or less',
    });
  }

  const account = await accountModel.findOne({ accountNumber });

  let currentBalance = account.balance;
  let updatedBalance = currentBalance + amount;
  account.balance = updatedBalance;

  account.save();

  return res.status(200).json({
    message: 'Amount deposited successfully',
    depositedAmount: amount,
    account,
  });
}

export async function withdrawMoneyController(req, res) {
  const { accountNumber, amount } = req.body;

  if (!accountNumber || !amount) {
    return res.status(200).json({
      message: 'Both accountNumber and amount is required',
    });
  }

  const account = await accountModel.findOne({ accountNumber });

  let currentBalance = account.balance;

  if (amount > currentBalance) {
    return res.status(400).json({
      message: 'withdrawal amount must be smaller than available balance',
    });
  }

  let updatedBalance = currentBalance - amount;
  account.balance = updatedBalance;

  account.save();

  return res.status(200).json({
    message: 'Amount Withdrawn sucessfully',
    withdrawnAmount: amount,
    account,
  });
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
