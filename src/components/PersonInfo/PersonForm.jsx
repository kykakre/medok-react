import React from 'react';
import style from "./PersonInfo.module.scss"
import { Select } from 'antd';
import logo from "../../assets/img/Russia.svg"
const { Option } = Select;
const PersonForm = (props) => {
    return (
        <form className={style.form}>
            <div className={style.formItem}>
                <div className={style.formTitle}>ФИО</div>
                <input
                    placeholder="Введите ФИО"
                    type="text"
                    className={style.formInput}
                />
            </div>
            <div className={style.formItem}>
                <div className={style.formTitle}>Дата рождения</div>
                <input placeholder="1.12.02" type="text" className={style.formInput}/>
            </div>
            <div className={style.formItemMax}>
                <div className={style.formTitle}>Оставьте комментарий для врача</div>
                <input
                    placeholder="Введите ваш комментарий"
                    type="text"
                    className={style.formInput}
                />
            </div>
            <div className={style.formItem}>
                <div className={style.formTitle}>Номер телефона</div>
                <div className={style.formFlex}>
                    <Select defaultValue="+7" className={style.formSelect}>
                        <Option
                            value="+7"
                            selected
                        >
                            <img src={logo} className={style.formIcon}/>
                            +7
                        </Option>
                    </Select>
                    <input className={style.selectInput}/>
                </div>
            </div>
            <input type="submit" className="form__btn next"/>
        </form>
    );
};

export default PersonForm;