import React, {useEffect, useState} from "react";
import './PostTwo.css'
import {PostTwo} from "./PostTwo";

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const PostsTwo = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        const someFunction = async () => {
            try {
                const res = await fetch(API_URL)
                const posts = await res.json()
                setPosts(posts)
            } catch (error: any) {
                setError(error.message)
            }
            setIsLoading(false)
        }
        someFunction();
    },[])


    // useEffect(() => {
    //     fetch(API_URL)
    //         .then(response => response.json())
    //         .then((posts)=>setPosts(posts))
    //         .catch((error)=>setError(error.message))
    //         .finally(()=>setIsLoading(false))
    // }, [])

    if (error) {
        return <h1>Error:{error}</h1>
    }

    return (
        <div className={"post"}>
            <h1>PostsTwo</h1>
            <hr/>
            {isLoading ? <h1>Loading...</h1> : posts.map((el: any) => {
                return <PostTwo key={el.id} id={el.id} body={el.body} title={el.title} userId={el.userId}/>
            })}
        </div>
    )
}

