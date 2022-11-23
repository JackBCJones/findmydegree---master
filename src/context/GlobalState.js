import React, {createContext, useContext, useState, useEffect} from 'react'
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

// preparing the dataLayer
const url = 'http://localhost:8000'

export const AppContext = createContext();

// wrapping our app and providing dataLayer to all componets
export const AppProvider = ({ reducer, initialState, children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("A");
    const [courses, setCourses] = useState([]);
    const [unis, setUnis] = useState([]);
    // const [uniKey, setUniKey] = useState('')



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
                })
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
    }, [searchTerm])

    const fetchCourses = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}/courses?search=${searchTerm}&limit=10`)
            const data = await response.json();
            const courses = data;
            if (courses) {
                const newCourses = courses.map((item)=>{
                    const {title,requirements,id,link, owner_id, owner} = item;
                    return {
                        title: title,
                        requirements: requirements,
                        course_id: id,
                        link: link,
                        owner: owner_id,
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
    }

    useEffect(() => {
      fetchCourses()
    }, [searchTerm])


     
    


    return (
        // useReducer(reducer, initialState)
    <AppContext.Provider value={{
        loading, 
        courses,
        unis,
        setSearchTerm,
        }}
        >
        {children}
    </AppContext.Provider>
)};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

// pull the information from the data layer


