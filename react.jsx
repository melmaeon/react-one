import React, { useState } from 'react';

export default function App() {

  const [myEmail, setMyEmail] = useState(0);
  const [myName, setMyName] = useState(0);
  const [mySurName, setMySurName] = useState(0);

  return (
  	<div>
      <label htmlFor="email">Your email address</label><br/>
      <input type="text" name="email" onChange= {(e) => {
        setMyEmail(e.target.value);
      }}/><br/>

      <label htmlFor="first-name">Your first name</label><br/>
      <input type="text" name="first-name" onChange={(e) => {
        setMyName(e.target.value);
      }}/><br/>

      <label htmlFor="last-name">Your last name</label><br/>
      <input type="text" name="last-name" onChange={(e) => {
        setMySurName(e.target.value);
      }}/><br/>

      <div>
          Your email address is : {myEmail} <br/>
          Your first name is : {myName} <br/>
          Your last name is : {mySurName}
      </div>

      <button></button> 
    </div>
  )
}

//test
