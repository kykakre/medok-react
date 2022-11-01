import React from 'react';
import style from "./Access.module.scss"
import {NavLink} from "react-router-dom";
import Title from "../Title/Title.jsx";
import qr from "../../assets/img/qr.svg"
import link from "../../assets/img/link.svg"
const Access = (props) => {
    debugger
    return (
        <>
            <Title setVisible={props.setVisible}
                   visible={props.visible} title="" arrow={true}/>
            <div className={style.notFound}>
                <div className={style.notFoundImg}></div>
                <div className={style.notFoundTitle}>
                    Мы получили Вашу заявку на консультацию
                </div>
                <div className={style.notFoundText}>
                    Вам придет смс-сообщение с дальнейшей инструкцией
                </div>
            </div>
            <div className={style.access}>
                <div className={style.accessText}>
                    Можно воспользоваться прямой ссылкой или QR-кодом
                </div>
                <div className={style.accessFlex}>
                    <NavLink to="#" className={style.accessLink}>
                        <img src={link} className={style.accessLinkIcon}/>
                        <div>Ссылка</div>
                    </NavLink>
                    <NavLink to="#" className={style.accessLinkBlue}>
                        <img src={qr} className={style.accessLinkIcon}/>
                        <div>QR-код</div>
                    </NavLink>
                    <img src={props.qr?.QrCode}/>
                </div>
            </div>
        </>
    );
};

export default Access;