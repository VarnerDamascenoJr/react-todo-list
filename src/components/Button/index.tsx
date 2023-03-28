import React from "react";
import "./styles.css";

interface ButtonProps  {
    text: string;
    size: "small" | "medium";
    fill: "filled" | "noFilled";
    type: "button" | "submit";
    onClick?: ()=>void
}

export const ButtonDefault = ({text, fill, size, type, onClick}:ButtonProps)=>{
    return(
        <button type={`${type}`} className={`${fill} ${size}`} onClick={onClick}>
            {text}
        </button>
    );
};