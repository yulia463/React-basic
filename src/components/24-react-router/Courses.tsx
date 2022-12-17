import React, {useEffect, useState} from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string'
import {coursesArray} from "./coursesArray";

export type coursesPropsType = {
    courses: Array<{
        title: string;
        slug: string;
        id: number;
    }>


}

export const SORT_KEYS = ['title', 'slug', 'id']

export function sortCourses(courses: any, key: any) {
    const sortedCourses = [...courses]
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses
    }
    sortedCourses.sort((a, b) => a[key] > b[key] ? 1 : -1)
    return sortedCourses
}

export const Courses = (props: coursesPropsType) => {
    const location = useLocation()
    const query = queryString.parse(location.search)
    const navigate = useNavigate()
    const [sortKey, setSortKey] = useState(query.sort)
    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(props.courses, sortKey)
    )
    useEffect(() => {
    if(!SORT_KEYS.includes(sortKey)){
        navigate('.')
        setSortKey()
        setSortedCourses([...coursesArray])
    }
    }, [sortKey, navigate])
    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
            {sortedCourses.map((course: any) => (
                <div className={"courseLink"} key={course.id}>
                    <Link to={course.slug}>
                        {course.title}
                    </Link>
                </div>
            ))}
        </>
    )
}