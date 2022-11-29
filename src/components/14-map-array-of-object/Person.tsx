import React from "react";
export type PersonPropsType={
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    img:string
}

function Person(props:PersonPropsType){

    return <div className="card">
        <img src={props.img}/>
        <h3>{props.firstName} {props.lastName}</h3>
        <h4>{props.email}</h4>


    </div>
}

export default Person;