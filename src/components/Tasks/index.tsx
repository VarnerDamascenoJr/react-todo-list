import React from "react";
import { TasksInterface } from "../../interface/interface";
import { Task } from "../Task";

export type TasksType = {
    tasks: {
        id: TasksInterface["id"]
        name: TasksInterface["name"]
        date: TasksInterface["date"]
        isCompleted: TasksInterface["isCompleted"]
    }[];
    onDelete: (id:number)=> void;
    onToggle:(id:number)=> void
}

export const Tasks = ({ tasks, onDelete, onToggle }:TasksType)=>{ 
    return(
        <>
        {tasks.map((task)=> <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)}
        </>
    );
};  