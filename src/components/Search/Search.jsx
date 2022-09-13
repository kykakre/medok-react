import React, {useEffect, useState} from "react";
import style from "./Search.module.scss";
import {GetServicesPost} from "../../store/slice/serviceSlice.js";

export default function Search(props) {
    const[value,setValue] = useState("")

    useEffect( ()=>{
         props.GetServicesPost(value)
    }, [value])
  return (
    <form className={style.search}>
      <input
        type="text"
        placeholder="Поиск по специализации"
        className={style.searchInput}
        onChange={(e)=>setValue(e.target.value)}
      />
      <button className={style.searchIcon} onClick={(e)=> {
          e.preventDefault()

      }}></button>
    </form>
  );
}
