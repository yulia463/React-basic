import React from "react";

export type PetInfoPropsType = {
    animal: string
    age: number
}
export const PetInfo = (props: PetInfoPropsType) => {
    //деструктуризация ниже
    const {animal,age}=props
    //  <h1>My {props.animal} is {props.age} yers old</h1>
    // и вместо этого кода пишем из-за структуризации код ниже
    return (
        <h1>My {animal} is {age} yers old</h1>
    )
}