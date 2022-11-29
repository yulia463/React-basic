import React from "react";

export type PetInfoPropsType = {
    animal: string
    age: number
    hasPet: boolean
}

export const PetInfo2 = (props: PetInfoPropsType) => {

    //деструктуризация ниже
    const {animal, age, hasPet} = props

    const text = hasPet
        ? `My ${animal} is ${age} yers old`
        : "I don't have an animal"

    return (
        <h1>
            {text}
        </h1>
    )
}