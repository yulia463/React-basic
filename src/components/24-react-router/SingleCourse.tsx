import React from "react";
import {Link, useParams} from "react-router-dom";
import {coursesPropsType} from "./Courses";

export const SingleCourse = (props:coursesPropsType) => {
    const params = useParams()
    const course = props.courses.find((course) => course.slug === params.courseSlug)
    return (
        <>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h3>{course?.id}</h3>
            <Link to={".." } relative={"path"}>All courses</Link>
        </>
    )
}