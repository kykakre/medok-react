import React from "react";
import {useSwiper} from "swiper/react";
export default function Title(props, { arrow }) {
    const swiper = useSwiper();

    return (
    <div className="header">
      <div className="header__flex">
        {props.arrow ? <div className="header__arrow" onClick={() => {
    swiper.slidePrev();
        }}/> : ""}
        <div className="header__title">{props.title}</div>
      </div>

      <div
        className="header__icon"
        onClick={() => {
            props.setVisible(!props.visible)

        }}
      />
    </div>
  );
}
