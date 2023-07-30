// HomePage.js
import React from 'react';
import Form from './form';
const HomePage = () => {
  // Assuming you have some logic here to get the name and email values.
  // For demonstration purposes, we'll use dummy data.
  const name = 'John Doe';
  const email = 'john.doe@example.com';

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Exporting name and email to be used in Form */}
      <Form name={name} email={email} />
    </div>
  );
};

export default HomePage;
