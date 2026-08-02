import { userModel } from '../models/customer.model.js';

export async function createCustomerController(req, res) {
  const { name, email } = req.body;

  if (!email || !name) {
    return res.status(400).json({
      message: 'both name and email are required',
    });
  }

  const emailExists = await userModel.findOne({ email });

  if (emailExists) {
    return res.status(400).json({
      message: 'Account already exists with this email',
    });
  }

  const user = await userModel.create({
    name,
    email,
  });

  return res.status(201).json({
    message: 'customer created',
    user: {
      name,
      email,
    },
  });
}

export async function deleteCustomerController(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: 'Email is required',
    });
  }

  await userModel.findOneAndDelete({ email });

  res.status(200).json({
    message: 'user deleted successfully',
  });
}

export async function getAllCustomerController(req, res) {
  const users = await userModel.find();

  res.status(200).json({
    message: 'fetched',
    users,
  });
}
