import {useEffect, useState} from 'react';
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
import Draznilki from "./components/Draznilki/Draznilki";
import {Posts} from "./components/21-jsonplaceholder-posts/Posts";
import {PostsTwo} from "./components/22-useEffect-async-await/PostsTwo";
import {Info} from "./components/23-css-modules/Info";
import button from "./components/12-13-state-via-props-and-map/Button";
import {inspect} from "util";



const texts = [
    'Click me',
    'Click me please',
    'Hit me',
    'Press me'
]

function App() {
    const [count, setCount] = useState(0)

    // const [todo, setTodo] = useState(null)
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => setTodo(json))
    // }, [])
    // console.log('App rendered')
    // console.log(todo)

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
            {/*<Wrapper color={"lightblue"}>*/}
            {/*    <h2>Text inside of the Wrapper</h2>*/}
            {/*    <button>Click me</button>*/}
            {/*</Wrapper>*/}
            {/*<Wrapper color={"lightgreen"}>*/}
            {/*    <h2>Another text</h2>*/}
            {/*   <p> Some description</p>*/}
            {/*    <input type={"text"} placeholder={"Enter value"}/>*/}
            {/*</Wrapper>*/}
            <Draznilki count={1}/>
            {/*<Posts/>*/}
            {/*<PostsTwo/>*/}
            {/*<Info/>*/}
            {/*<div className={"info"}>*/}
            {/*<h1>App component heading</h1>*/}
            {/*<button className={"my-button"}>App component button</button>*/}
            {/*<button className={"myOtherButton"}>App component button 2</button>*/}
            {/*    <h1>123</h1>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;
