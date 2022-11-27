import React from "react";
import App from "../../App";

type CounterPropsType={
    count:any
}
const Counter = (props:CounterPropsType) => {
    return <h1> Total click:{props.count}</h1>
}
export default Counter;