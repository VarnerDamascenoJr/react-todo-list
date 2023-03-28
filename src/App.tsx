import React, { useState} from "react";

import {Header} from "./components/Header/index";
import "./App.css";
import { Tasks } from "./components/Tasks";
import { TasksInterface } from "./interface/interface";
import { CreateTaskForm, IFormInput } from "./components/CreateTaskForm";
import { ButtonDefault } from "./components/Button";




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
      <Header />
      <h1>Teste text</h1>

      <ButtonDefault 
        type="button"
        fill="noFilled"
        size="small"
        text={showForm ? "Close":"Show Form"}
        onClick={()=>setShowForm(!showForm)}
      />
      {showForm && <CreateTaskForm onCreate={createTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggletask}/>
    </div>
  );
}

export default App;
