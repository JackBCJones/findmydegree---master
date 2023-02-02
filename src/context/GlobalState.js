import React, {createContext, useCallback, useContext, useState, useEffect} from 'react'
// import { useCallback } from 'react';
// import CourseCard from '../components/courses/CourseCard';
// import AppReducer from './AppReducer';



// preparing the dataLayer


const url = 'http://localhost:8000'
// const initialState = {
//     favourites: [],
// };

export const AppContext = createContext();

// wrapping our app and providing dataLayer to all componets
export const AppProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(AppReducer, initialState)
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState([]);
    const [unis, setUnis] = useState([]);
    const [favourites, setFavourites] = useState([]);
    // const [unikey, setUnikey] = React.useState('')




    const fetchUnis = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}/unis/`)
            const data = await response.json();
            const unis = data;
            if (unis) {
                const newUnis = unis.map((item)=>{
                    const {
                        id,
                        name,
                        img,
                        nickname,
                        color,
                        text_color,
                    } = item;
                    return {
                        uni_id: id,
                        name: name,
                        img: img,
                        nickname: nickname,
                        color: color,
                        text_color: text_color,
                    }
                }, )
                setUnis(newUnis)
            } else {
                setUnis([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false) 
        }
    }

    useEffect(() => {
      fetchUnis()
    }, [])

    const fetchCourses = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}/courses?search=${searchTerm}&limit=10000`)
            const data = await response.json();
            const courses = data;
            if (courses) {
                const newCourses = courses.map((item)=>{
                    const {title,requirements,id,link, owner} = item;
                    return {
                        title: title,
                        requirements: requirements,
                        course_id: id,
                        link: link,
                        owner: owner
                    }
                })
                setCourses(newCourses)
            } else {
                setCourses([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false) 
        }
    }, [searchTerm])

    useEffect(() => {
      fetchCourses()
    }, [searchTerm, fetchCourses])



    return (
        // useReducer(reducer, initialState)
    <AppContext.Provider value={{
        loading, 
        courses,
        unis,
        setSearchTerm,
        favourites,
        setFavourites,
        searchTerm
        // coursesByOwner,
        // setUnikey,

        // favourites: state.favourites,
        // addCourseToFavourites,
        }}
        >
        {children}
    </AppContext.Provider>
)};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

// pull the information from the data layer


