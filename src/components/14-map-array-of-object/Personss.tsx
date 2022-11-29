import React from "react";
import {persons} from "./persons";
import Person from "./Person";

const Personss = () => {
    return <div className="cards">
        {persons.map((person) => {
            return <Person
                {...person}
                key={person.id}
            />
        })}
    </div>
}
export default Personss;