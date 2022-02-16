import React from 'react';
import { useState } from 'react';

const InputSection = ({ activity, setActivity, toDos, setToDos }) => {
  const [isEmpty, setIsEmpty] = useState(true)

  
  
  // Function to handle input changes
  const typingToDo = (e) => {
    setActivity(e.target.value)

    // this feature needs more work, will be modified later with useRef
    if (e.target.value !== '') {
      setIsEmpty(false)
    }
    else {
      setIsEmpty(true)
    }
  }

  // Function to handle adding an activty
  const addToDo = () => {
    if (activity !== '') {
      // add new todo to the existing todos or empty list
      if (toDos.length !== 0) {
        setToDos(prevToDos => {
          return [...prevToDos, {todo: activity, id: prevToDos[prevToDos.length - 1].id + 1}];
        })
      } 
      else {
        setToDos( [{todo: activity, id: 1}] )
      }
      
      setActivity(''); // reset activity
    }
  }

  return (
    <div className="input-section">
      <input 
        id="input-field" 
        type="text" 
        placeholder="Enter activity..." 
        value={activity}
        onChange={(e) => typingToDo(e)}
      />
      {isEmpty ? 
        (<button className="add-btn" onClick={addToDo} disabled>+</button>) : 
        (<button className="add-btn" onClick={addToDo}>+</button>)
      }
    </div>
  )
}

export default InputSection