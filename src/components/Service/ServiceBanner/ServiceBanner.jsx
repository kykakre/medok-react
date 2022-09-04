import React, { useState } from "react";
import style from "./ServiceBanner.module.scss";
import pediator from "../../../assets/img/pediator.png";
import { Modal } from "antd";
export default function ServiceBanner() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <a href="#" className="modalHelp__btn">
          К терапевту
        </a>
        <div className="modalHelp__close" onClick={() => setModalIsOpen(false)}>
          Закрыть
        </div>
      </Modal>
    </>
  );
}
