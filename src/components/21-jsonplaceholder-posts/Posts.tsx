import React, {useEffect, useState} from "react";
import {Post} from "./Post";


export const Posts=()=>{
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts)=>{
                setPosts(posts)
                console.log(posts)
            })
            .catch((error)=>console.log(error.message))
    }, [])

    return(
        <div>
            {posts.map((el:any)=>{
                return <Post id={el.id} body={el.body} title={el.title} userId={el.userId}/>
            })}

        </div>
    )
}

