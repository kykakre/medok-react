import React from 'react';
import style from "../Doctor/Doctor.module.scss";
import star from "../../assets/img/star.svg";
import message from "../../assets/img/message.svg";

const PersonInfoDoctor = (props) => {
    return (
        <div className={style.card}>
        <div className={style.position}>
            <img className={style.avatar} src={props.doctor.avatar}/>
            <div className={style.text}>
                <div className={style.title}>
                    <div className={style.name}>{props.doctor.name}</div>
                    <div className={style.name}>{props.doctor.lastname}</div>
                    <div className={style.name}>{props.doctor.surname}</div>
                </div>
                <div className={style.specifical}>{props.doctor.type}</div>
                <div className={style.grade}>
                    <div className={style.item}>
                        <img src={star} className={style.itemIcon}/>
                        <div className={style.itemText}>3,5</div>
                    </div>
                    <div
                        className={style.item}

                    >
                        <img src={message} className={style.itemIcon}/>
                        <div className={style.itemText}>{props.doctor.review} отзывов</div>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.infoItem}>
                        <div className={style.infoTitle}>Степень</div>
                        <div className={style.infoText}>{props.doctor.degree}</div>
                    </div>
                    <div className={style.infoItem}>
                        <div className={style.infoTitle}>Стаж</div>
                        <div className={style.infoText}>{props.doctor.experiens}</div>
                    </div>
                    <div className={style.infoItem}>
                        <div className={style.infoTitle}>Категория</div>
                        <div className={style.infoText}>{props.doctor.category}</div>
                    </div>
                </div>
            </div>
        </div>
            <div className={style.reception}>
                <div className={style.receptionItem}>
                    <div className={style.receptionTitle}>Тип приёма</div>
                    <div className={style.receptionText}>{props.type.title}</div>
                </div>
                <div className={style.receptionItem}>
                    <div className={style.receptionTitle}>Стоимость</div>
                    <div className={style.receptionText}>{props.type.cash} ₽</div>
                </div>
                <div className={style.receptionItem}>
                    <div className={style.receptionTitle}>Дата и время</div>
                    <div className={style.receptionText}>14 августа в 12:00</div>
                </div>


            </div>
    </div>
    )
};

export default PersonInfoDoctor;