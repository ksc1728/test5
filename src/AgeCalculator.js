import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageDate = new Date(ageInMilliseconds);
      const years = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(years);
    } else {
      setAge(null);
    }
  };

  return (
    <div className='box'>
      <label className='label'>Enter your date of birth</label>
      <input className='fill'
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <button onClick={calculateAge} className='btn'>Calculate Age</button>
      {age !== null && (
        <h2 className='result'>You are {age} years old</h2>
      )}
    </div>
  );
}

export default AgeCalculator;
