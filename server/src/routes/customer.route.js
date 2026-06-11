import expressRouter from "express";

export const customerRouter = expressRouter();

import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomerController,
} from "../controllers/customer.controller.js";

/**
 * @route /api/customer
 * @description create user with name and email
 * @access public
 */
customerRouter.post("/", createCustomerController);

/**
 * @route /api/customer/delete
 * @description delete an user
 * @access public
 */
customerRouter.post("/delete", deleteCustomerController);

/**
 * @route /api/customer/getAllCustomers
 * @description get all users
 * @access public
 */
customerRouter.get("/getAllCustomers", getAllCustomerController);
