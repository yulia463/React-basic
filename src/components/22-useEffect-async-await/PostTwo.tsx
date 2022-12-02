import React from "react";

type PostTwoPropsType = {
    id: number,
    body: string,
    title: string,
    userId: number
}
export const PostTwo = (props: PostTwoPropsType) => {
    return (
        <div style={{marginBottom: "30px"}}>
            <small> {props.id}</small>
            <h2>{props.body}</h2>
            <p>{props.userId}</p>
            <h3>{props.title}</h3>
        </div>
    )
}