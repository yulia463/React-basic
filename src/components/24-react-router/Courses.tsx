import React from "react";
import {Link, NavLink} from "react-router-dom";


export type coursesPropsType = {
    courses: Array<{
        title: string;
        slug: string;
        id: number;
    }>

}
export const Courses = (props: coursesPropsType) => {
    return (
        <>
            <h1>Courses</h1>
            {props.courses.map((course) => (
                <div className={"courseLink"}  key={course.id}>

                    <Link to={course.slug}>
                        {course.title}
                    </Link>
                </div>
            ))}
        </>
    )
}