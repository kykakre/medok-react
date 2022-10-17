import React from "react";
import style from "./Doctor.module.scss"
import avatar from "../../assets/doctor-male.svg"
import { useSwiper } from 'swiper/react';
import {doctorSlice} from "../../store/slice/doctorSlice.js";
import {useDispatch} from "react-redux";
import {GetDoctorsConsultationsByMainTypePost} from "../../store/slice/typeSlice.js";

export default function DoctorItem(props) {
  const dispatch = useDispatch();
  const swiper = useSwiper();
  const date = props.WorkStartDate ? new Date().getFullYear() - new Date(props.WorkStartDate).getFullYear() : "меньше года";
  return <div className={style.card}>
    <div className={style.position}>
      <img className={style.avatar} src={props.CurrentDoctor?.AvatarImagePath ? "https://medok-dev.spaceapp.ru/" + props.CurrentDoctor.AvatarImagePath : avatar}/>
      <div className={style.text}>
        <div className={style.title}>
          <div className={style.name}>{props.CurrentDoctor?.Name}</div>
          <div className={style.name}>{props.CurrentDoctor?.PatronymicName}</div>
          <div className={style.name}>{props.CurrentDoctor?.Surname}</div>
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
      dispatch(doctorSlice.actions.SetDoctor(props.CurrentDoctor));
      props.GetVisitTypePost(1, props.serviceId,props.Id)
      props.setDoctorId(props.Id)
      swiper.slideNext();
      window.scrollTo(0,0)

    }}>
      <div className={style.arrowIcon}></div>
    </div>
  </div>;
}

