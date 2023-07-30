// Form.js
import React from 'react';

const Form = ({ name, email }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={() => {}} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={() => {}} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
