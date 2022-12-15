import React, {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {coursesPropsType} from "./Courses";

export const SingleCourse = (props: coursesPropsType) => {
    const params = useParams()
    const navigate = useNavigate()

    const course = props.courses.find((course) => course.slug === params.courseSlug)
    useEffect(() => {

        if (!course) {
            navigate('..', {relative: 'path'})
        }
    },[course,navigate])
    return (
        <>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h3>{course?.id}</h3>
            <Link to={".."} relative={"path"}>All courses</Link>
        </>
    )
}