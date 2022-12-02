import React, {useEffect, useState} from "react";
import {Post} from "./Post";
import './Post.css'

export const Posts=()=>{
    const [posts, setPosts] = useState([])
    const [error,setError]=useState('')
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts)=>setPosts(posts))
            .catch((error)=>setError(error.message))
            .finally(()=>setIsLoading(false))
    }, [])

    if(error){
        return <h1>Error:{error}</h1>
    }

    return(
        <div className={"post"}>
            <h1>Posts</h1>
            <hr/>
            {isLoading? <h1>Loading...</h1>:posts.map((el:any)=>{
                    return <Post key={el.id} id={el.id} body={el.body} title={el.title} userId={el.userId}/>
                })}
        </div>
    )
}

