import React, { useState } from 'react';

export default function App() {

  const [myName, setMyName] = useState("");

  return (
  	<div>
      <label htmlFor="email">Your email address</label><br/>
      <input type="text" name="email" onChange= {(e) => {
        setMyName(e.target.value);
      }}/><br/>

      <label htmlFor="first-name">Your first name</label><br/>
      <input type="text" name="first-name" /><br/>

      <label htmlFor="last-name">Your last name</label><br/>
      <input type="text" name="last-name" /><br/>

      <div>
          Your email address is : {"email"} <br/>
          Your first name is : {"first-name"} <br/>
          Your last name is : {"last-name"}
      </div>

      <button></button> 
    </div>
  )
}

//test
