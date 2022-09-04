import React from "react";
import style from "./Search.module.scss";

export default function Search(props) {
  return (
    <form className={style.search}>
      <input
        type="text"
        placeholder="Поиск по специализации"
        className={style.searchInput}
      />
      <button className={style.searchIcon}></button>
    </form>
  );
}
