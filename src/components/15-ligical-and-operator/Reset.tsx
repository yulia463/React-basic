import React from "react";
import App from "../../App";
import Button, {ButtonPropsType} from "../12-13-state-via-props-and-map/Button";
import exp from "constants";

type ResetPropsType={
    resetCount:any
    count:number
}
const Reset = (props: ResetPropsType) => {
    return <div>
        {props.count > 0 && (<div>
            <button style={{backgroundColor: 'lightblue'}} onClick={props.resetCount}>Reset</button>
        </div>)}</div>
}
export default Reset;