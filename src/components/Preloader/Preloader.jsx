import React from 'react';
import logo from "../../assets/logo.svg"
import style from "./Preloader.module.scss"
const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={logo} alt="logo" className={style.logo}/>
        </div>
    );
};

export default Preloader;