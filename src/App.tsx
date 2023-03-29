import React, { useState} from "react";

import {Header} from "./components/Header/index";
import "./App.css";
import { Tasks } from "./components/Tasks";
import { TasksInterface } from "./interface/interface";
import { CreateTaskForm, IFormInput } from "./components/CreateTaskForm";

function App() {
  const [tasks, setTasks] = useState<TasksInterface []>([
    {
        id: 1, 
        name: "Task 1",
        date: "10th september",
        isCompleted:false
    },
    {
        id: 2, 
        name: "Task 2",
        date: "10th september",
        isCompleted:false
    },
    {
        id: 3, 
        name: "Task 3",
        date: "10th september",
        isCompleted:false
    },
    {
        id: 4, 
        name: "Task 4",
        date: "10th september",
        isCompleted:false
    },
    {
        id: 5, 
        name: "Task 5",
        date: "10th september",
        isCompleted:false
    },

]);

const [showForm, setShowForm] = useState<boolean>(false);

const showFormButton = ()=>{
  setShowForm(!showForm);
};
const createTask = (data:IFormInput):void=>{
  const id = Math.random()*11000+ 12;
  const newTasks = {...data, id};
  setTasks([...tasks,newTasks ]);
};

const deleteTask = (id:TasksInterface["id"]):void=>{
  setTasks(
    tasks.filter((task)=> task.id !==id)
  );
};

const toggletask = (id:TasksInterface["id"]):void=>{
  setTasks(
    tasks.map((task)=>task.id === id ? {...task, isCompleted:!task.isCompleted} : task)
  );
};

  return (
    <div className="App">
      <Header showForm={showForm} onShow={showFormButton} />
      {showForm && <CreateTaskForm onCreate={createTask} />}
      {tasks.length <= 1 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggletask}/> : <h4>No Tasks</h4>}
    </div>
  );
}

export default App;
