import React, { useState } from "react";
import style from "../Doctor/Doctor.module.scss";
import star from "../../assets/img/star.svg";
import message from "../../assets/img/message.svg";
import { Modal } from "antd";
import TypeComment from "./TypeComment";
import close from "../../assets/img/close.svg";
const TypeDoctor = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let item = props.comments.map((e) => (
    <TypeComment
      id={e.id}
      key={e.id}
      date={e.date}
      person={e.person}
      personCom={e.personCom}
      status={e.status}
      comment={e.comment}
    />
  ));
  return (
    <div className={style.card}>
      <div className={style.position}>
        <img className={style.avatar} src={props.doctor.avatar} />
        <div className={style.text}>
          <div className={style.title}>
            <div className={style.name}>{props.doctor.name}</div>
            <div className={style.name}>{props.doctor.lastname}</div>
            <div className={style.name}>{props.doctor.surname}</div>
          </div>
          <div className={style.specifical}>{props.doctor.type}</div>
          <div className={style.grade}>
            <div className={style.item}>
              <img src={star} className={style.itemIcon} />
              <div className={style.itemText}>3,5</div>
            </div>
            <div className={style.item}>
              <img src={message} className={style.itemIcon} />
              <div
                className={style.itemText}
                onClick={() => setModalIsOpen(true)}
              >
                {props.doctor.review} отзывов
              </div>
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
      <Modal footer={null} visible={modalIsOpen} closable={false}>
        <div className="modal__title">
          <div className="modal__text">Отзывы пациентов</div>
          <img
            src={close}
            className="modal__icon"
            onClick={() => setModalIsOpen(false)}
          />
        </div>
        <div className="comment">{item}</div>
      </Modal>
    </div>
  );
};

export default TypeDoctor;
