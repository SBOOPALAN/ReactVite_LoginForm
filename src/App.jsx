import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Student Name is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form logic here
      alert('Form submitted successfully');
    }
  };

  return (
    <>
      <center>
        <div className="div1">
          <h1>REGISTRATION FORM</h1>
          <p>Fill out the form carefully for registration</p>

          <form onSubmit={handleSubmit}> 
            <div className="div2">
              <label>Student Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className='font' style={{ color: 'red' }}>{errors.name}</p>}

              <label>Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className='font' style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <label>Message</label>
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className='font' style={{ color: 'red' }}>{errors.message}</p>}
            <br /><br />

            <div className="button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}

export default App;
