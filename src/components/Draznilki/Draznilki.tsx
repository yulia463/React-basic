import React, {useState} from "react";
import App from "../../App";
import Button from "../12-13-state-via-props-and-map/Button";

let randomBodyParts = ["пердёж", "глаз", "нос", "взгляд", "зуб"];
let randomAdjectives = ["безобразный", "кривой", "вонючий", "унылый", "дурацкий", "картавый", "глупый", "странный", "смешной"];
let randomWords = ["ухо", "ноги", "язык", "волосы", "ноги", "голова"];
let randomParts = ["коровы", "хейтера", "барана", "мухи", "выдры", "кобылы", "мартышки", "крысы", "морковки"];


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

        let randomPart = randomParts[Math.floor(Math.random() * 4)];

        let randomInsult = "У тебя " + randomBodyPart + " ещё более " + randomAdjective + " ,чем " + randomWord + " у " + randomPart;
        setDraznilka(randomInsult)
    }
    return <div>
        <h1> {draznilka}</h1>
        <Button text={"Сгенерировать дразнилку"} onClick={generation}/>
    </div>
}
export default Draznilki;