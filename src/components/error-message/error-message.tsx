import React from 'react';

const ErrorMessage: React.FC<{ message?: string }> = ({ message }) => (
  <div className="error-message">
    {message || 'An error occurred. Please try again later.'}
  </div>
);

export default ErrorMessage;
