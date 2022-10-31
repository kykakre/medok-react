import React, {useEffect, useState} from 'react';
import style from "./Search.module.scss";

const SearchDoctors = (props) => {
    const[value,setValue] = useState("")


    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value)

        useEffect(() => {
            const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

            return () => {
                clearTimeout(timer)
            }
        }, [value, delay])

        return debouncedValue
    }
    const debouncedValue = useDebounce(value, 700)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        props.GetDoctorSearch(value)
    }, [debouncedValue])




    return (
        <form className={style.search}>
            <input
                type="text"
                placeholder="Поиск врачей"
                className={style.searchInput}
                onChange={handleChange}
            />
            <button className={style.searchIcon} onClick={(e)=> {
                e.preventDefault()
                props.GetDoctorSearch(value)
            }}></button>
        </form>
    );
};

export default SearchDoctors;