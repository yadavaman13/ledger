import axios from 'axios';
import React, { useState } from 'react';

const AccountPage = () => {

  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState(0);

  const api = axios.create({
    baseURL: '/api/account',
    withCredentials: true
  })

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(amount)

    api.post('/', {accountNumber, amount})

    setAmount('');
    setAccountNumber('');
  }

  return (
    <div className="h-screen w-vw bg-gray-700 text-white">
      <h1 className="text-center font-bold text-4xl">Account Page</h1>

      <div className="bg-gray-500 mx-30 my-20 px-30 py-20">
        <h1 className="text-center font-bold text-4xl">Create Account</h1>

        <form onSubmit={submitHandler}>
          <h1 className="mt-5">Account Number</h1>
          <input
            className="border-2 border-b-white rounded-sm"
            type="text"
            id="accountNumber"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => {
              setAccountNumber(e.target.value);
            }}
          />

          <h1 className="mt-5">Deposit Amount</h1>
          <input
            className="border-2 border-b-white rounded-sm"
            type="number"
            id="amount"
            placeholder="Enter initial deposit amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <br />

          <button className="bg-gray-700 border-2 border-b-white rounded-sm my-5">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
