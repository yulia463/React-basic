import React from "react";

type WrapperProps = {children: React.ReactNode; }

export const Wrapper: React.FC<WrapperProps> =(props)=>{
    return(
        <div>
            <h1> Hello from Wrapper</h1>
            {props.children}
        </div>
    )
}
