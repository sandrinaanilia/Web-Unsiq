// components/Popup.js
import React from 'react';

const Popup1 = ({ show, onClose, title, content }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{content}</p>
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup1;
