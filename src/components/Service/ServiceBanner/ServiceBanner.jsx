import React, { useState } from "react";
import style from "./ServiceBanner.module.scss";
import pediator from "../../../assets/img/pediator.png";
import { Modal } from "antd";
import {useSwiper} from "swiper/react";
export default function ServiceBanner(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const swiper = useSwiper();
  return (
    <>
      <div className={style.help} onClick={() => setModalIsOpen(true)}>
        <div className={style.helpText}>Не знаете, к кому обратиться?</div>
        <div className={style.helpIcon}></div>
      </div>
      <Modal
        footer={null}
        visible={modalIsOpen}
        closable={false}
        className="modalHelp"
      >
        <img src={pediator} className="modalHelp__img" />
        <div className="modalHelp__title">Не знаете, к кому обратиться?</div>
        <div className="modalHelp__text">
          Если Вы не уверены, какой врач Вам нужен - вам подскажет терапевт,
          после консультации.
        </div>
        <div onClick={()=>{
            props.GetDoctorPost(1,1)
            setModalIsOpen(false)
            swiper.slideNext()
        }} className="modalHelp__btn">
          К терапевту
        </div>
        <div className="modalHelp__close" onClick={() => setModalIsOpen(false)}>
          Закрыть
        </div>
      </Modal>
    </>
  );
}
