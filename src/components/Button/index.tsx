import React from "react";
import "./styles.css";

interface ButtonProps  {
    text: string;
    size: "small" | "medium";
    fill: "filled" | "noFilled"
}

export const ButtonDefault = ({text, fill, size}:ButtonProps)=>{
    return(
        <button className={`${fill} ${size}`} >
            {text}
        </button>
    );
};