import React from 'react';
import { useParams } from 'react-router-dom';

const TicketConfirmation = () => {
  const { orderId } = useParams();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold text-green-600">
        🎉 Purchase Successful!
      </h1>
      <p className="text-lg mt-2">Your ticket has been booked successfully.</p>
      <p className="mt-4 text-gray-700">
        Order ID: <span className="font-bold">{orderId}</span>
      </p>
      <p className="mt-4 text-gray-600">
        A confirmation email has been sent to your registered email.
      </p>
      <a
        href="/homepage"
        className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white rounded-md"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default TicketConfirmation;
