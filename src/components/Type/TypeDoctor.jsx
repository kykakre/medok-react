import React, {useEffect, useState} from "react";
import style from "../Doctor/Doctor.module.scss";
import star from "../../assets/img/star.svg";
import message from "../../assets/img/message.svg";
import { Modal } from "antd";
import TypeComment from "./TypeComment";
import close from "../../assets/img/close.svg";
import avatar from "../../assets/img/avatarDoctor.png"
const TypeDoctor = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);



  console.log(modalIsOpen)



  let item = props.comments.DoctorsReviews?.map((e) => (
    <TypeComment
      Id={e.Id}
      key={e.Id}
      Rating={e.Rating}
      Comment={e.Comment}
      PatientName={e.PatientName}
      DateOfCreation={e.DateOfCreation}


    />
  ));
  const date =  new Date().getFullYear() - new Date(props.CurrentDoctor?.WorkStartDate).getFullYear();
  return (
    <div className={style.card}>
      <div className={style.position}>
        <img className={style.avatar} src={props.CurrentDoctor?.AvatarImagePath ? "https://medok-dev.spaceapp.ru/" + props.CurrentDoctor?.AvatarImagePath : avatar} />
        <div className={style.text}>
          <div className={style.title}>
            <div className={style.name}>{props.CurrentDoctor?.Name}</div>
            <div className={style.name}>{props.CurrentDoctor?.PatronymicName}</div>
            <div className={style.name}>{props.CurrentDoctor?.Surname}</div>
          </div>
          <div className={style.specifical}>{props.CurrentDoctor?.doctorSpecial}</div>
          <div className={style.grade}>
            <div className={style.item}>
              <img src={star} className={style.itemIcon} />
              <div className={style.itemText}>{props.CurrentDoctor?.Rating?props.CurrentDoctor.Rating:"Нет оценок"}</div>

            </div>
            <div className={style.item}>
              <img src={message} className={style.itemIcon} />
              <div
                className={style.itemText}
                onClick={(e) => {

                  setModalIsOpen(true)



                }}
              >
                {props.CurrentDoctor?.NumberOfReviews} отзывов
              </div>
            </div>
          </div>
          <div className={style.info}>
            {props.CurrentDoctor?.ScientificDegree?<div className={style.infoItem}>
              <div className={style.infoTitle}>Степень</div>
              <div className={style.infoText}>{props.CurrentDoctor.ScientificDegree}</div>
            </div>:<></>}
            {date? <div className={style.infoItem}>
              <div className={style.infoTitle}>Стаж(в годах)</div>
              <div className={style.infoText}> {date} </div> </div>:null}

            {
              props.CurrentDoctor?.QualificationCategory ?
                <div className={style.infoItem}>
                  <div className={style.infoTitle}>Категория</div>
                  <div className={style.infoText}>{props.CurrentDoctor?.QualificationCategory}</div>
                </div>
                :null
            }
            {
              props.CurrentDoctor?.ScientificDegree ?
                  <div className={style.infoItem}>
                    <div className={style.infoTitle}>Степень</div>
                    <div className={style.infoText}>{ props.CurrentDoctor?.ScientificDegree}</div>
                  </div>
                  :null
            }
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
