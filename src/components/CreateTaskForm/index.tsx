import React, { useEffect } from "react";
import { SubmitHandler,useForm } from "react-hook-form";



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
            <input type="text" {...register("name")} />
            <input type="text" {...register("date")} />
            <input type="checkbox" {...register("isCompleted")} />
            <button type="submit">Add Task</button>

        </form>
    );
};