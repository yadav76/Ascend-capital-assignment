import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList'
import Navbar from './Components/Navbar';

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [dummy, setDummy] = useState(0);

  const addNewTodo = () => {

    todoArr.push(<TodoList count={todoArr.length} />)
    setDummy(dummy + 1);
    setTodoArr(todoArr);
  }

  return (

    <div>
      <Navbar />

      <div className="main-container">


        {todoArr.map((ele, index) => (
          <div key={index} className='newTodo'>
            {ele}
          </div>
        ))}
        <div className='container'>
          <p className='todoHeading'>Create New List</p>
          <div className="btn">
            <button onClick={addNewTodo} className='addNewTodo'>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
