import React from "react";
import style from "./Doctor.module.scss"
import star from "../../assets/img/star.svg"
import message from "../../assets/img/message.svg"
import avatar from "../../assets/img/avatarDoctor.png"

import { useSwiper } from 'swiper/react';
export default function DoctorItem(props) {
  const swiper = useSwiper();
  const date = props.WorkStartDate ? new Date().getFullYear() - new Date(props.WorkStartDate).getFullYear() : "меньше года";
  return <div className={style.card}>
    <div className={style.position}>
      <img className={style.avatar} src={avatar}/>
      <div className={style.text}>
        <div className={style.title}>
          <div className={style.name}>{props.Name}</div>
          <div className={style.name}>{props.PatronymicName}</div>
          <div className={style.name}>{props.Surname}</div>
        </div>
        <div className={style.specifical}>{props.doctorSpecial}</div>
        {/*<div className={style.grade}>*/}
        {/*  <div className={style.item}>*/}
        {/*    <img src={star} className={style.itemIcon}/>*/}
        {/*    <div className={style.itemText}>3,5</div>*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*      className={style.item}*/}

        {/*  >*/}
        {/*    <img src={message} className={style.itemIcon}/>*/}
        {/*    <div className={style.itemText}>{props.review} отзывов</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={style.info}>
          {/*<div className={style.infoItem}>*/}
          {/*  <div className={style.infoTitle}>Степень</div>*/}
          {/*  <div className={style.infoText}>{props.degree}</div>*/}
          {/*</div>*/}
          <div className={style.infoItem}>
            <div className={style.infoTitle}>Стаж(в годах)</div>
            <div className={style.infoText}> {date} </div>
          </div>
          {/*<div className={style.infoItem}>*/}
          {/*  <div className={style.infoTitle}>Категория</div>*/}
          {/*  <div className={style.infoText}>{props.category}</div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
    <div className="next arrow arrow--red" onClick={()=> {
      swiper.slideNext()
      props.GetVisitTypePost(props.serviceId,props.Id)
      props.setDoctorId(props.Id)

    }}>
      <div className={style.arrowIcon}></div>
    </div>
  </div>;
}

