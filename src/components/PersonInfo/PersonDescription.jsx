import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./PersonInfo.module.scss"
const PersonDescription = () => {
    return (
        <div className={style.description}>
            Я подтверждаю, что все данные указаны верно. Нажимая “Отправить” я
            принимаю условия <NavLink to="">ИДС</NavLink> и
            <NavLink to="#"> договора на мед. обслуживание</NavLink>, а также даю согласие
            на
            <NavLink to="#"> обработку персональных данных</NavLink>
            .
        </div>
    );
};

export default PersonDescription;