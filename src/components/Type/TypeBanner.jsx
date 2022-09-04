import React from 'react';
import style from './Type.module.scss'
const TypeBanner = () => {
    return (
        <div className={style.help}>
            <div>
                <div className={style.title}>Вызов на дом</div>
                <div className={style.bold}>5000 руб</div>
            </div>
            <div className={style.icon}></div>
        </div>
    );
};

export default TypeBanner;