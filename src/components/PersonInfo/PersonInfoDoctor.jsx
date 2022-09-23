import React from 'react';
import style from "../Doctor/Doctor.module.scss";
import star from "../../assets/img/star.svg";
import message from "../../assets/img/message.svg";
import avatar from "../../assets/img/avatarDoctor.png";

const PersonInfoDoctor = (props) => {
    const date = props.CurrentDoctor?.WorkStartDate ? new Date().getFullYear() - new Date(props.CurrentDoctor?.WorkStartDate).getFullYear() : "меньше года";
    return (
        <div className={style.card}>
        <div className={style.position}>
            <img className={style.avatar} src={props.CurrentDoctor?.AvatarImagePath ? "https://medok-dev.spaceapp.ru/" + props.CurrentDoctor?.AvatarImagePath : avatar}/>
            <div className={style.text}>
                <div className={style.title}>
                    <div className={style.name}>{props.CurrentDoctor?.Name}</div>
                    <div className={style.name}>{props.CurrentDoctor?.PatronymicName}</div>
                    <div className={style.name}>{props.CurrentDoctor?.Surname}</div>
                </div>
                <div className={style.specifical}>{props.doctorSpecial}</div>
                <div className={style.grade}>
                    <div className={style.item}>
                        <img src={star} className={style.itemIcon}/>
                        <div className={style.itemText}>3,5</div>
                    </div>
                    <div
                        className={style.item}
                    >
                        <img src={message} className={style.itemIcon}/>
                        <div className={style.itemText}> отзывов</div>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.infoItem}>
                        <div className={style.infoTitle}>Степень</div>
                        <div className={style.infoText}>{props.CurrentDoctor?.ScientificDegree}</div>
                    </div>
                    <div className={style.infoItem}>
                        <div className={style.infoTitle}>Стаж(в годах)</div>
                        <div className={style.infoText}>{date}</div>
                    </div>
                    <div className={style.infoItem}>
                        <div className={style.infoTitle}>Категория</div>
                        <div className={style.infoText}>{props.CurrentDoctor?.QualificationCategory}</div>
                    </div>
                </div>
            </div>
        </div>
            <div className={style.reception}>
                <div className={style.receptionItem}>
                    <div className={style.receptionTitle}>Тип приёма</div>
                    <div className={style.receptionText}>{props.CurrentVisitType?.Title}</div>
                </div>
                <div className={style.receptionItem}>
                    <div className={style.receptionTitle}>Стоимость</div>
                    <div className={style.receptionText}>{props.CurrentVisitType?.Price} ₽</div>
                </div>
              {/*  <div className={style.receptionItem}>
                    <div className={style.receptionTitle}>Дата и время</div>
                    <div className={style.receptionText}>14 августа в 12:00</div>
                </div>*/}
            </div>
    </div>
    )
};

export default PersonInfoDoctor;