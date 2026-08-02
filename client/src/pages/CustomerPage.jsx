import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const CustomerPage = () => {
  const api = axios.create({
    baseURL: '/api/customer',
    withCredentials: true,
  });

  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    await api.post('/', { name, email });

    getData();

    setName('');
    setEmail('');
    console.log(user);
    console.log(name);
    console.log(email);
  };

  async function getData() {
    const res = await api.get('/getAllCustomers');
    const { users } = res.data;

    setUser(users);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen w-vw bg-gray-700 text-white">
      <h1 className="text-center text-4xl font-bold">Customer Page</h1>

      <div className="bg-gray-500 px-30 py-30 my-20 mx-30">
        <form onSubmit={submitHandler}>
          <h2>Name</h2>
          <input
            className="border-2 border-b-white rounded-sm"
            type="text"
            id="name"
            placeholder="Enter the Customer Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <h2 className="mt-5">Email</h2>
          <input
            className="border-2 border-b-white rounded-sm"
            type="email"
            id="name"
            placeholder="Enter the Customer Name"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <br />

          <button className="bg-gray-700 border-2 border-b-white rounded-sm my-5">
            Create Customer
          </button>
        </form>
      </div>

      <div className="bg-gray-500 px-10 py-10 ">
        <h2 className="text-center text-2xl">Customers:</h2>
        {user.map(function(elem) {
          return (
            <div key={elem._id || elem.email}>
              <Card name={elem.name} email={elem.email} onDelete={getData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerPage;
