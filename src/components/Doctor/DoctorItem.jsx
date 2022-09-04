import React from "react";
import style from "./Doctor.module.scss"
import star from "../../assets/img/star.svg"
import message from "../../assets/img/message.svg"
export default function DoctorItem(props) {
  return <div className={style.card}>
    <div className={style.position}>
      <img className={style.avatar} src={props.avatar}/>
      <div className={style.text}>
        <div className={style.title}>
          <div className={style.name}>{props.name}</div>
          <div className={style.name}>{props.lastname}</div>
          <div className={style.name}>{props.surname}</div>
        </div>
        <div className={style.specifical}>{props.type}</div>
        <div className={style.grade}>
          <div className={style.item}>
            <img src={star} className={style.itemIcon}/>
            <div className={style.itemText}>3,5</div>
          </div>
          <div
              className={style.item}

          >
            <img src={message} className={style.itemIcon}/>
            <div className={style.itemText}>{props.review} отзывов</div>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.infoItem}>
            <div className={style.infoTitle}>Степень</div>
            <div className={style.infoText}>{props.degree}</div>
          </div>
          <div className={style.infoItem}>
            <div className={style.infoTitle}>Стаж</div>
            <div className={style.infoText}>{props.experiens}</div>
          </div>
          <div className={style.infoItem}>
            <div className={style.infoTitle}>Категория</div>
            <div className={style.infoText}>{props.category}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="next arrow arrow--red">
      <div className={style.arrowIcon}></div>
    </div>
  </div>;
}

