import expressRouter from "express";

export const accountRouter = expressRouter();

import {
  createAccountController,
  deleteAccountController,
  getAccountsByUserController,
} from "../controllers/account.controller.js";

/**
 * @route POST /api/account
 * @description create account with name, balance, and userId
 * @access public
 */
accountRouter.post("/", createAccountController);

/**
 * @route GET /api/account/user/:userId
 * @description get all accounts of a user
 * @access public
 */
accountRouter.get("/user/:userId", getAccountsByUserController);

/**
 * @route DELETE /api/account/:id
 * @description delete an account
 * @access public
 */
accountRouter.delete("/:id", deleteAccountController);
