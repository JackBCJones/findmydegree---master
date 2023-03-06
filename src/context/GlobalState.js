import React, {createContext, useCallback, useContext, useState, useEffect} from 'react'



// preparing the dataLayer


const url = process.env.REACT_APP_API_URL


export const AppContext = createContext();

// wrapping our app and providing dataLayer to all componets
export const AppProvider = ({ children }) => {

    // making sure that on refresh the state is going to be initialized from this instead of an empty array

    const favouritesFromLocalStorage = JSON.parse(localStorage.getItem("saved-favs") || "[]")

    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState([]);
    const [unis, setUnis] = useState([]);
    const [favourites, setFavourites] = useState(favouritesFromLocalStorage);
    
    // saving favourites to local storage 

    useEffect(() => {
        localStorage.setItem('saved-favs', JSON.stringify(favourites))
      }, [favourites]);

    
    const fetchUnis = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}/unis/`)
            const data = await response.json();
            const uni_data = data;
            if (uni_data) {
                const newUnis = uni_data.map((item)=>{
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
    }, [])

    useEffect(() => {
    fetchUnis()
    }, [fetchUnis])

    const fetchCourses = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}/courses?search=${searchTerm}&limit=10000`)
            const data = await response.json();
            const courses_data = data;
            if (courses_data) {
                const newCourses = courses_data.map((item)=>{
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
        // filterList,
        // setFilterList
        }}
        >
        {children}
    </AppContext.Provider>
)};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

// pull the information from the data layer


