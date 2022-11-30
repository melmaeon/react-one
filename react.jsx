import React, { useState } from 'react';

export default function App() {

  const [myEmail, setMyEmail] = useState(0);
  const [myName, setMyName] = useState(0);
  const [mySurName, setMySurName] = useState(0);

  return (
  	<div>
      <label htmlFor="email">Your email address</label><br/>
      <input type="text" name="email" onChange= {(e) => {
        setMyEmail(e.target.email);
      }}/><br/>

      <label htmlFor="first-name">Your first name</label><br/>
      <input type="text" name="first-name" /><br/>

      <label htmlFor="last-name">Your last name</label><br/>
      <input type="text" name="last-name" /><br/>

      <div>
          Your email address is : {setMyName} <br/>
          Your first name is : {"first-name"} <br/>
          Your last name is : {"last-name"}
      </div>

      <button></button> 
    </div>
  )
}

//test
