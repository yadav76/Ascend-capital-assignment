import React, { useEffect, useState } from 'react'

const TodoList = ({ count }) => {
    const [task, setTask] = useState([1])
    const [taskText, setTaskText] = useState("");
    const [checked, setChecked] = useState(false);

    const saveTask = (index) => {

        task.push({ text: "", disable: false });

        let newTask = {
            text: taskText,
            disable: true
        }

        task.splice(index, 1, newTask);

        setTask(task);
    }

    return (
        <div className='app'>
            <div className="input-group">
                <p className='list-heading'>List {count + 1}</p>
                <div className="list-container">
                    {task.map((ele, index) => (
                        <div key={index} className="list-item">
                            <div className='list-item'>
                                <div className='sub-list-item'>
                                    <input className='checkbox' type="checkbox" />

                                    <input onChange={e => setTaskText(e.target.value)} className='enter-text' type="text" name="" id="" placeholder='Enter task' />
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TodoList