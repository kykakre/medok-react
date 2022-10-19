import React, {useEffect} from "react";
import style from "./Service.module.scss";
import specializationPlaceholder from "../../assets/img/special1.png"
import { useSwiper } from 'swiper/react';

export default function ServiceItem(props) {
    const swiper = useSwiper();
  return (
    <div className={style.card} onClick={()=> {
        props.GetDoctorPost(1, props.Id)
        swiper.slideNext()
        props.setServiceId(props.Id)
        window.scrollTo(0,0)
    }
    }>
      <div className={style.cardFlex}>
        <img className={style.cardIcon} src={props.img ? "https://medok-dev.spaceapp.ru/" + props.img : specializationPlaceholder} />
        <div>
          <div className={style.cardTitle}>{props.Title}</div>
          <div className={style.cardType}>{props.Title}</div>
        </div>
      </div>
      <div className="next arrow" >
        <div className={style.arrowIcon}></div>
      </div>
    </div>
  );
}
