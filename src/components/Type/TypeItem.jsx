import React from 'react';
import style from "./Type.module.scss"
import {doctorSlice} from "../../store/slice/doctorSlice.js";
import {useDispatch} from "react-redux";
import {typeSlice} from "../../store/slice/typeSlice.js";
import {useSwiper} from "swiper/react";
const TypeItem = (props) => {
    const dispatch = useDispatch();
    const swiper = useSwiper();
    return (
        <div className={style.card}>
            <div className={style.position}>
                <div className={style.flex}>
                    <img
                        src={props.icon}
                        className={style.img}
                    />
                    <div className={style.item}>
                       <div className={style.cardTitle}>{props.Title}</div>
                        <div className={style.text}>1 вопрос - {props.Duration} минут</div>
                    </div>
                </div>

                <div className={style.price}><span>{props.Price}</span> {props.valute}</div>
            </div>

            <div className="next arrow" onClick={()=> {
                dispatch(typeSlice.actions.SetCurrentVisitType(props));
                swiper.slideNext();

            }}>
                <div className="arrow__icon"></div>
            </div>
        </div>
    );
};

export default TypeItem;