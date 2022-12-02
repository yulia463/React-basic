import React from "react";

type WrapperProps = {
    children: React.ReactNode;
    color: any
}

export const Wrapper: React.FC<WrapperProps> = (props) => {
    const style = {
        backgroundColor: props.color,
        width: '250px',
        padding: '20px',
        margin:'20px auto'
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}
