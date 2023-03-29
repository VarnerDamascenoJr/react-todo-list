import React from "react";
import { ButtonDefault } from "../Button";

import "./styles.css";

interface HeaderType {
    onShow: (showForm:boolean)=> void
    showForm: boolean
}

export const Header = ({ showForm ,onShow}:HeaderType) =>{
    return(
        <nav className="container space">
            <h1 className="title">Todo List </h1>
            <ButtonDefault fill="filled" size="small" text={showForm ? "Close":"Show Form"}  onClick={()=>onShow(!showForm)} type="button"/>
        </nav>
    );
};