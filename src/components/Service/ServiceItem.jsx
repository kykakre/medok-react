import React, {useEffect} from "react";
import style from "./Service.module.scss";
import travm from "../../assets/img/special1.png";
import { useSwiper } from 'swiper/react';

export default function ServiceItem(props) {
    const swiper = useSwiper();
  return (
    <div className={style.card}>
      <div className={style.cardFlex}>
        <img className={style.cardIcon} src={travm} />
        <div>
          <div className={style.cardTitle}>{props.Title}</div>
          <div className={style.cardType}>{props.Title}</div>
        </div>
      </div>
      <div className="next arrow" onClick={()=> {
          props.GetDoctorPost(props.Id)
          swiper.slideNext()
          props.setServiceId(props.Id)
      }
      }>
        <div className={style.arrowIcon}></div>
      </div>
    </div>
  );
}
