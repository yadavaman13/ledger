import React from 'react';
import axios from 'axios';

const Card = ({ name, email, onDelete }) => {
  const api = axios.create({
    baseURL: '/api/customer',
    withCredentials: true,
  });

  const deleteHandler = async (e) => {
    e.preventDefault();

    try {
      await api.post('/delete', { email });
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div className="border-2 border-b-white rounded-sm text-shadow-white">
      <h2>{name}</h2>
      <h3>{email}</h3>
      <button
        onClick={deleteHandler}
        className="bg-gray-700 border-2 border-b-white rounded-sm my-5"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
