import React, {useEffect, useState} from "react";
import { Drawer, Button } from "antd";
import { Virtual } from 'swiper';
import { Navigation } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Service from "../Service/Service";
import Doctor from "../Doctor/Doctor";
import Type from "../Type/Type.jsx";
import PersonInfo from "../PersonInfo/PersonInfo.jsx";
import Access from "../Access/Access.jsx";
import {GetSpecializationPost} from "../../store/slice/specializationSlice.js";
export default function DrawerComponent(props) {
  const [visible, setVisible] = useState(false);
  const[serviceId,setServiceId] = useState();
  const[ doctorId,setDoctorId] = useState()
  console.log(props.specialization)

    useEffect(() =>{
        props.GetSpecializationPost();
    }, [])
  const showDrawer = () => {
    setVisible(true);
  };

    const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={()=>{
          showDrawer();
      }} >
        Открыть дравер
      </Button>
      <Drawer
        closable={false}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Swiper
          modules={[Navigation,Virtual]}
          navigation={{ prevEl: ".header__arrow" }}
          slidesPerView={1}
          effect="creative"
          allowTouchMove={false}
          virtual
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        >
          <SwiperSlide className="slide" virtualIndex={1}>
            <Service
                specialization={props.specialization}
                GetDoctorPost={props.GetDoctorPost}
                GetServicesPost={props.GetServicesPost}
              setVisible={setVisible}
              visible={visible}
              service={props.service}
                setServiceId={setServiceId}
            />
          </SwiperSlide>
          <SwiperSlide className="slide" virtualIndex={2}>
            <Doctor
                serviceId={serviceId}
                setDoctorId={setDoctorId}
                service={props.service}
                GetVisitTypePost={props.GetVisitTypePost}
                doctorSpecial={props.doctorSpecial}
                doctor={props.doctor}
                setVisible={setVisible}
                visible={visible}
            />
          </SwiperSlide>
          <SwiperSlide className="slide" virtualIndex={3}>
            <Type
              doctorId={doctorId}
              doctor={props.doctor}
              comments={props.comments}
              type={props.type}
              setVisible={setVisible}
              visible={visible}
            />
          </SwiperSlide>
          {/*<SwiperSlide className="slide">*/}
          {/*  <PersonInfo doctor={props.doctor}   serviceId={serviceId}  doctorId={doctorId} type={props.type} />*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide className="slide">*/}
          {/*  <Access setVisible={setVisible} visible={visible} />*/}
          {/*</SwiperSlide>*/}
        </Swiper>
      </Drawer>
    </>
  );
}
