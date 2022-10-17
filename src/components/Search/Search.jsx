import React, {useEffect, useState} from "react";
import style from "./Search.module.scss";
import {GetServicesPost} from "../../store/slice/serviceSlice.js";

export default function Search(props) {
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
        props.GetServicesPost(value)
    }, [debouncedValue])




  return (
    <form className={style.search}>
      <input
        type="text"
        placeholder="Поиск по специализации"
        className={style.searchInput}
        onChange={handleChange}
      />
      <button className={style.searchIcon} onClick={(e)=> {
          e.preventDefault()
          props.GetServicesPost(value)
      }}></button>
    </form>
  );
}
