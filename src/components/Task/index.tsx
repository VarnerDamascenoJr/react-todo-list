import React from "react";
import { TasksInterface } from "../../interface/interface";
import { IoIosCloseCircle } from "react-icons/io";
import "./styles.css";

export type TaskType = {
    task: {
        id: TasksInterface["id"]
        name: TasksInterface["name"]
        date: TasksInterface["date"]
        isCompleted: TasksInterface["isCompleted"]
    }
    onDelete: (id:number)=> void
    onToggle: (id:number)=> void
}

export const Task = ({task, onDelete, onToggle}:TaskType) =>{

    const {id, name, isCompleted} = task;

    return(
        <div>
            <p onDoubleClick={()=>onToggle(id)} className={isCompleted ? "completedTask":"notCompletedTask"} > {name} <IoIosCloseCircle onClick={()=>onDelete(id)}/></p>
        </div>
    );
};