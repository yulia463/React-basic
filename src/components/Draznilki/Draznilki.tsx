import React, {useState} from "react";
import App from "../../App";
import Button from "../12-13-state-via-props-and-map/Button";

let randomBodyParts = ["глазки", "носик", "ебучка"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая", "картавая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса", "морковкинс"];

// Выбор случайной части тела из массива randomBodyParts:


type DraznilkiPropsType = {
    count: any
}

const Draznilki = (props: DraznilkiPropsType) => {
    const [draznilka, setDraznilka] = useState('')

    const generation = () => {
        let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

        let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

        let randomWord = randomWords[Math.floor(Math.random() * 5)];

        let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
        setDraznilka(randomInsult)
    }
    return <div>
        <h1> {draznilka}</h1>
        <Button text={"Сгенерировать дразнилку"} onClick={generation}/>
    </div>
}
export default Draznilki;