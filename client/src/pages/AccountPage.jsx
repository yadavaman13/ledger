import React, { useState } from 'react';

const AccountPage = () => {
  const [accountNumber, setaccountNumber] = useState('');
  const [amount, setamount] = useState('');

  return (
    <div className="h-screen w-vw bg-gray-700 text-white">
      <h1 className="text-center font-bold text-4xl">Account Page</h1>

      <div className="bg-gray-500 mx-30 my-20 px-30 py-20">
        <h1 className="text-center font-bold text-4xl">Create Account</h1>

        <form>
          <h1 className="mt-5">Account Number</h1>
          <input
            className="border-2 border-b-white rounded-sm"
            type="text"
            id="accountNumber"
            required="true"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => {
              setaccountNumber(e.target.accountNumber);
            }}
          />

          <h1 className="mt-5">Deposit Amount</h1>
          <input
            className="border-2 border-b-white rounded-sm"
            type="number"
            required="true"
            placeholder="Enter initial deposit amount"
            value={amount}
            onChange={(e) => {
              setamount(e.target.value);
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
