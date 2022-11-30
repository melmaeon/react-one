import React, { useState } from 'react';

export default function App() {
  
// -- Initial Values --
 const [toDo, makeToDo] = useState([
   'Wash dishes',
   'Do laundry',
   'Clean bathroom'
 ]);

// -- Debug function used for checking if text box works --
  function changeField(event) {
    console.log(event.target.value);
  }

  //Code for adding whatever is in the text box would go here
  
// -- Page information + updating page code --
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="listBox"
        onChange={changeField}
        />
      </form>
        <button>Add to List</button>
        <ul>
          {
            toDo.map(function (value, index) {
              return <li>{ value }</li>
            })
          }
        </ul>
    </div>
  )

}
