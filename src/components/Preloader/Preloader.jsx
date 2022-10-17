import React from 'react';
import logo from "../../assets/logo.svg"
import style from "./Preloader.module.scss"
const Preloader = () => {
    return (
        <div className={style.preloader}>
            <div className={style.block}>
                <img src={logo} alt="logo" className={style.logo}/>

            </div>
        </div>
    );
};

export default Preloader;