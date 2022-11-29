import {useState} from 'react';
import React from 'react';
import './App.css';
import Counter from "./components/12-13-state-via-props-and-map/Counter";
import Button from "./components/12-13-state-via-props-and-map/Button";
import Person from "./components/14-map-array-of-object/Person";
import {persons} from "./components/14-map-array-of-object/persons";
import Personss from "./components/14-map-array-of-object/Personss";
import Reset from "./components/15-ligical-and-operator/Reset";
import Card from "./components/16-react-fragment/Card";
import Login from "./components/17-uncontroll-input/Login";
import ControllLogin from "./components/18-controlled-input/ControlledLogin";
import ControlLogin from "./components/18-controlled-input/ControlledLogin";
import ControlledLogin from "./components/18-controlled-input/ControlledLogin";
import {Wrapper} from "./components/19-children-prop/Wrapper";

const texts = [
    'Click me',
    'Click me please',
    'Hit me',
    'Press me'
]

function App() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <div className="App">
            {/*// урок components - MyComponents - Other*/}
            {/*<MyComponent/>*/}
            {/*<Other/>*/}
            {/*// урок 09-props*/}
            {/*<PetInfo animal={'cat'} age={3}/>*/}
            {/*<PetInfo animal={'dog'} age={5}/>*/}
            {/*  // урок 10-conditional-renderin*/}
            {/*<PetInfo2 animal={"elifant"} age={7} hasPet={true}/>*/}
            {/*<PetInfo2 animal={"tiger"} age={9} hasPet={false}/>*/}
            {/*  //урок 11-state*/}
            {/*  <RandomNumber maxNum={1000}/>*/}
            {/*  // урок 12-13 счетчик*/}
            {/*<Counter count={count}/>*/}
            {/*{texts.map((text,index)=>{*/}
            {/*    return <Button onClick={incrementCount} text={text} key={index}/>*/}
            {/*})}*/}
            {/*//урок14-видео149*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<Personss/>*/}
            {/*//урок 15*/}
            {/*<Counter count={count}/>*/}
            {/*<Button onClick={incrementCount}/>*/}
            {/*<Button onClick={incrementCount}/>*/}
            {/*<Button onClick={incrementCount}/>*/}
            {/*<Button onClick={incrementCount}/>*/}
            {/*<Reset count={count} resetCount={resetCount}/>*/}
            {/*//урок 16*/}
            {/*<Card/>*/}
            {/*// урок 17*/}
            {/*<Login/>*/}
            {/*//урок 18*/}
            {/*<ControlledLogin/>*/}
            {/*//урок 19*/}
            <Wrapper>
                <h2>Text inside of the Wrapper</h2>
            </Wrapper>
        </div>
    );
}

export default App;
