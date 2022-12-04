import React from "react";
import './Info.css'
import styles from './Info.module.css'

console.log(styles)

export const Info = () => {
    return (
        <div className={styles.info}>
            <span>hello</span>

            <h1>Hello from the Info component</h1>
            <h2>h2 component</h2>

            <button className={"my-button"}>Click me in the Info component</button>

        </div>
    )
}