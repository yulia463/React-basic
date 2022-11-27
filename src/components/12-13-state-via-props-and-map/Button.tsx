import React from "react";
import App from "../../App";
type ButtonPropsType={
    count?:any
    onClick:()=>void
    text:string
}
const Button =(props:ButtonPropsType)=>{

    return <button onClick={props.onClick}> {props.text}</button>
}
export default Button;