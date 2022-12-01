import React from "react";

type PostPropsType={
  id:number,
  body:string,
  title:string,
  userId:number
}
export const Post = (props:PostPropsType) => {
  return(
      <div style={{marginBottom:"30px"}}>
        {props.id }{props.body}{props.userId}{props.title}
      </div>
  )
}