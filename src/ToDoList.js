import { useState } from 'react';
import './index.css'

function ToDoList() {

  const [tasks, setTasks] = useState([{text: "Go to the gym", finished: "incomplete"}, {text: "Have breakfast", finished: "incomplete"}, {text: "Begin homework", finished: "incomplete"}]);
  const [newTask, setNewTask] = useState({});

  function handleInputChange(e) {
    setNewTask({text: e.target.value, finished: 'incomplete'});
  }

  function addTask() {
    if (newTask.text.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask({text: "", finished: 'incomplete'});
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

/*
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  */

  function finishTask(index) {
    tasks.map((_, i) => {
      if (i === index) {
        const updatedTasks = [...tasks];
        if (updatedTasks[i].finished === "incomplete") {
          updatedTasks[i].finished = "complete";
        } else if (updatedTasks[i].finished === "complete") {
          updatedTasks[i].finished = "incomplete";
        }
        setTasks(updatedTasks);
      }
    });
  }

  /*
  function expandTask(index) {
    
  }
  */

  function editTask(index) {
    
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask.text}
          onChange={handleInputChange}
        />

        <button
          className="add-button"
          onClick={addTask}
        >
          +
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => {
          return (
            <li className={`to-do-list-item ${task.finished === "complete" ? "crossed" : ""}`} key={index}>
              <button
                className={`check-item-button ${task.finished === "complete" ? "crossed" : ""}`}
                onClick={() => {
                  finishTask(index);
                }}
              >
                ✔️
              </button>
              <span className={`text ${task.finished === "complete" ? "crossed" : ""}`}>{task.text}</span>
              <button
                className="delete-button"
                onClick={() => {
                  deleteTask(index)
                }}
              >
                🗑️
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  editTask(index);
                }}
              >
                ✏️
              </button>
            </li>
          );
        })}
      </ol>

    </div>
  );
}

export default ToDoList;