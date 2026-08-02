import expressRouter from 'express';

export const customerRouter = expressRouter();

import {
  createCustomerController,
  deleteCustomerController,
  editCustomerController,
  getAllCustomerController,
  getCustomerByEmailController,
} from '../controllers/customer.controller.js';

/**
 * @route /api/customer
 * @description create user with name and email
 * @access public
 */
customerRouter.post('/', createCustomerController);

/**
 * @route /api/customer/delete
 * @description delete an user
 * @access private
 */
customerRouter.post('/delete', deleteCustomerController);

/**
 * @route /api/customer/edit
 * @description edit user details
 * @access private
 */
customerRouter.post('/edit', editCustomerController);

/**
 * @route /api/customer/getByEmail
 * @description fetch user detail by email
 * @access private
 */
customerRouter.get('/getByEmail', getCustomerByEmailController);

/**
 * @route /api/customer/getAllCustomers
 * @description get all users
 * @access public
 */
customerRouter.get('/getAllCustomers', getAllCustomerController);
