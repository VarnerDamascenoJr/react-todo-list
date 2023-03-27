import React, { useEffect } from "react";
import { SubmitHandler,useForm } from "react-hook-form";

import "./styles.css";
import { ButtonDefault } from "../Button";

type FormData = {
    onCreate:(data:IFormInput)=>void
}

export interface IFormInput {
    name: string;
    date: string;
    isCompleted: boolean;
}

export const CreateTaskForm = ({onCreate}: FormData) =>{
    const { handleSubmit, register, reset,formState, formState:{ isSubmitSuccessful} } = useForm<IFormInput>({
        defaultValues:{
            name:"",
            date:"",
            isCompleted:false
        }
    });

const onSubmit :SubmitHandler<IFormInput>= (data) =>{
    onCreate(data);
};

useEffect(()=>{
    if (isSubmitSuccessful) {
        reset({ name:"", date:"", isCompleted:false });
    }
},[formState, reset]);
    return(
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input className="spaceInput" type="text" {...register("name")} />
            </div>
            <div>
                <input className="spaceInput" type="text" {...register("date")} />
            </div>
            <input className="checkboxInput" type="checkbox" {...register("isCompleted")} />
            <button type="submit">Add Task</button>
            <ButtonDefault 
                fill="filled" 
                size="small" 
                text="Test"
                />
        </form>
    );
};