import React, {useState} from 'react';
import style from "./PersonInfo.module.scss"
import { Select } from 'antd';
import logo from "../../assets/img/Russia.svg"
import {useSwiper} from "swiper/react";
const { Option } = Select;
const PersonForm = (props) => {
    const swiper = useSwiper()
    const [fio, setFio] = useState("")
    const [phone, setPhone] = useState("")
    const [birth, setBirth] = useState("")
    const [comment, setComment] = useState("")
    return (
        <form className={style.form}
              onSubmit={(e)=>{
                  e.preventDefault();
                  if (phone.length === 10 && fio !== "" && birth !== "" && fio != null && birth != null){
                      props.SendMessagePost({
                          ConsultationTypeId: props.visitId,
                          DoctorId: props.doctorId,
                          ClientInfo:
                              {ClientPhoneNumber:phone,ClientFullName:fio, ClientDateOfBirth:birth, ClientsComment:comment}})
                      swiper.slideNext()
                  }
              }}
        >
            <div className={style.formItem}>
                <div className={style.formTitle}>ФИО</div>
                <input
                    placeholder="Введите ФИО"
                    type="text"
                    className={style.formInput}
                    value={fio}
                    onChange={(e)=>{setFio(e.target.value)}}
                />
            </div>
            <div className={style.formItem}>
                <div className={style.formTitle}>Дата рождения</div>
                <input placeholder="1.12.02" type="date" className={style.formInput}
                       value={birth}
                       onChange={(e)=>{setBirth(e.target.value)}}/>
            </div>
            <div className={style.formItemMax}>
                <div className={style.formTitle}>Оставьте комментарий для врача</div>
                <input
                    placeholder="Введите ваш комментарий"
                    type="text"
                    className={style.formInput}
                    value={comment}
                    onChange={(e)=>{setComment(e.target.value)}}
                />
            </div>
            <div className={style.formItem}>
                <div className={style.formTitle}>Номер телефона</div>
                <div className={style.formFlex}>
                    <Select defaultValue="+7" className={style.formSelect}>
                        <Option
                            value="+7"
                            selected
                        >
                            <img src={logo} className={style.formIcon}/>
                            +7
                        </Option>
                    </Select>
                    <input className={style.selectInput} value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
            </div>
            <input type="submit" className="form__btn next"/>
        </form>
    );
};

export default PersonForm;