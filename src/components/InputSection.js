import React from 'react';
import { useState, useEffect } from 'react';

const InputSection = ({ toDos, setToDos }) => {
  const [isEmpty, setIsEmpty] = useState(false)
  const [activity, setActivity] = useState('')

  // Function to toggle button enabled or disabled state
  useEffect(() => {
   activity ? setIsEmpty(false) : setIsEmpty(true)
  }, [activity])
  
  // Function to handle adding an activty
  const addToDo = () => {
    let newToDo = { //create new to-do object
      todo: activity, 
      id: Math.floor(Math.random() * 10000)
    }
    setToDos(prevToDos => { //add new to-do object to to-do list
      return [...prevToDos, newToDo ]
    })
  }

  // Function to handle adding a new to-do
  const handleSubmit = (e) => {
    e.preventDefault() //prevent form from submitting
    addToDo() //add new to-do to to-do list 
    setActivity('') //clear input field after adding new to-do
  }

  return (
    <form className="input-section" onSubmit={e => handleSubmit(e)}>
      <input 
        id="input-field" 
        type="text" 
        placeholder="Enter activity..." 
        value={activity}
        onChange={e => setActivity(e.target.value)}
      />
      {isEmpty ? 
        (<button className="add-btn" disabled>+</button>) : 
        (<button className="add-btn">+</button>)
      }
    </form>
  )
}

export default InputSection