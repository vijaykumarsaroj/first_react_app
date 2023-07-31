// FormComponent.js
import React from 'react';

const FormComponent = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
