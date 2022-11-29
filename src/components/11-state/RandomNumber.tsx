import React from "react";
import {useState} from "react";
import {generateRandomNum} from "./generateRandomNum";

export type RandomNumberPropsType={
    maxNum:number
}

export const RandomNumber = (props:RandomNumberPropsType) => {
    const [randomNum, setRandomNum] = useState(generateRandomNum(1000))
const changeRandomNum=()=>{
        setRandomNum(generateRandomNum(1000))
}
    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random number</button>
        </div>
    )
}