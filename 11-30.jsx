// Template by Jean Saint Fleur!

// -- Importing all required modules --

import "./styles.css";
import React, { useState } from 'react';
import { useRef } from 'react';
export default function App() {


// -- All variables and functions go here --

  const [open, setOpen] = useState(true);

  const [toDo, makeToDo] = useState([
    'Wash dishes',
    'Do laundry'
  ]);

  const toDoRef = useRef();


    // -* Functions *-

      

// -- App Contents --  

  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <p>
        This application work that way :
        <ul>
          <li>
            {" "}
            To add a todo we need to select first a list in the Todo Lists by
            clicking on the list name button (like "List one" or "List two")
          </li>
          <li>
            When selecting a todo list, the text will get updated that way :
            Current List : [List Name]
          </li>
          <li>
            Once we have a selected todo list, we have to add some text inside
            of the input field, and click the Add Todo Button , this will add
            the todo below the current selected list.
          </li>
          <li>
            To add a new Todo List, fill the input field and click the Add list
            button.
          </li>
        </ul>
      </p>
      <div className="actions">
        <h2>Actions : </h2>
        <h3>Current List : List One</h3>
        <input
        type="text"
        ref={toDoRef}
        />
        <button
        onClick={function () {
          makeToDo([...toDo, toDoRef.current.value]);
          toDoRef.current.value = "";
        }
        }>Add Todo</button>
        <button>Add List</button>
      </div>
      <h3>Todo Lists</h3>
      <ul>
        <li>
          <button>List one</button>
          <ul>
            {toDo.map(function (value, index) {
              return <li>{value}</li>
            })}
          </ul>
        </li>
        <li>
          <button>List two</button>
          <ul>
            <li>Todo three </li>
            <li>Todo four</li>
          </ul>
        </li>
        <li>
          <button>List Three</button>
          <ul></ul>
        </li>
        <li>
          <button>List Four</button>
          <ul></ul>
        </li>
      </ul>
    </div>
  );
}
