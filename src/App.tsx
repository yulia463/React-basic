import {useEffect, useState} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import './App.css';
import Draznilki from "./components/Draznilki/Draznilki";
import NotFound from "./components/24-react-router/NotFound";
import About from "./components/24-react-router/About";
import Contacts from "./components/24-react-router/Contacts";
import Home from "./components/24-react-router/Home";
import {MainLayout} from "./components/24-react-router/MainLayout";
import {Courses} from "./components/24-react-router/Courses";
import {coursesArray} from "./components/24-react-router/coursesArray";
import {SingleCourse} from "./components/24-react-router/SingleCourse";


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
        <HashRouter>
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
                {/*<RandomNumber maxNum={1000}/>*/}
                {/*  // урок 12-13 счетчик*/}
                {/*<Counter count={count}/>*/}
                {/*{texts.map((text, index) => {*/}
                {/*    return <Button onClick={incrementCount} text={text} key={index}/>*/}
                {/*})}*/}
                {/*//урок14-видео149*/}
                {/* eslint-disable-next-line react/jsx-no-undef*/}
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
                {/*    <p> Some description</p>*/}
                {/*    <input type={"text"} placeholder={"Enter value"}/>*/}
                {/*</Wrapper>*/}
                {/*<Posts/>*/}
                {/*<PostsTwo/>*/}
                {/*<Info/>*/}
                {/*<div className={"info"}>*/}
                {/*    <h1>App component heading</h1>*/}
                {/*    <button className={"my-button"}>App component button</button>*/}
                {/*    <button className={"myOtherButton"}>App component button 2</button>*/}
                {/*    <h1>123</h1>*/}
                {/*</div>*/}
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index={true} element={<Home/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                        <Route path={'draznilki'} element={<Draznilki count={1}/>}/>
                        <Route path={'about'} element={<About/>}/>
                        <Route path={'contacts'} element={<Contacts/>}/>
                        <Route path={'courses'} element={<Courses courses={coursesArray}/>}/>
                        <Route path={'courses/:courseSlug'} element={<SingleCourse courses={coursesArray}/>}/>
                    </Route>

                </Routes>
            </div>

        </HashRouter>


    );
}

export default App;