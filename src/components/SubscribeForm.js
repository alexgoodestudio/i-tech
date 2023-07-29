import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap';
import "../css/index.css"
import Form from 'react-bootstrap/Form';

const Subscribe2 = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmitForm = event => {
   alert('Welcome to iTech! Check your email for instructions on Free trial!');
   
   console.log(fullName, email)
    event.preventDefault(); // 👈️ prevent page refreshhh

    // 👇️ clear all input values in the form
    setFullName('');
    setEmail('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmitForm}>
       <Form.Group className='subscribeForm'>
        <label> Name:
          <Form.Control
            id="full_name"
            name="full_name"
            type="text"
            onChange={event => setFullName(event.target.value)}
            value={fullName}
          />
        </label>
        <br></br>
        <label> Email:
          <Form.Control
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <br></br>
        <Button type="submit" variant="outline-secondary" className='mt-3'>Submit form</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Subscribe2;



