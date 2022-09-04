import React from 'react';
import style from "./Type.module.scss"
const TypeItem = (props) => {
    return (
        <div className={style.card}>
            <div className={style.position}>
                <div className={style.flex}>
                    <img
                        src={props.icon}
                        className={style.img}
                    />
                    <div className={style.item}>
                       <div className={style.cardTitle}>{props.title}</div>
                        <div className={style.text}>{props.subtitle}</div>
                    </div>
                </div>

                <div className={style.price}><span>{props.cash}</span> {props.valute}</div>
            </div>

            <div className="next arrow">
                <div className="arrow__icon"></div>
            </div>
        </div>
    );
};

export default TypeItem;