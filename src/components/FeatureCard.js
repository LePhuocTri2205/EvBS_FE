import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="card hover:border-navy">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;