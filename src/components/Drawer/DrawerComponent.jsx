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
import {GetDoctorsReviewsPost} from "../../store/slice/typeSlice.js";
import {GetDoctorSearch} from "../../store/slice/doctorSlice.js";
export default function DrawerComponent(props) {
  const [visible, setVisible] = useState(false);
  const[serviceId,setServiceId] = useState();
  const[ doctorId,setDoctorId] = useState(0)

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
          props.GetServicesPost("")
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
                serviceLoading={props.serviceLoading}
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
                GetDoctorSearch={props.GetDoctorSearch}
                GetDoctorPost={props.GetDoctorPost}
                serviceId={serviceId}
                setDoctorId={setDoctorId}
                service={props.service}
                GetVisitTypePost={props.GetVisitTypePost}
                GetDoctorsConsultationsByMainTypePost={props.GetDoctorsConsultationsByMainTypePost}
                doctorSpecial={props.doctorSpecial}
                doctors={props.doctors}
                setVisible={setVisible}
                visible={visible}
                doctorsLoading={props.doctorsLoading}
                GetDoctorsReviewsPost={props.GetDoctorsReviewsPost}


            />
          </SwiperSlide>
          <SwiperSlide className="slide" virtualIndex={3}>
            <Type
                GetDoctorsConsultationsByMainTypePost={props.GetDoctorsConsultationsByMainTypePost}
                doctorId={doctorId}
                consultations={props.consultations}
                serviceId={serviceId}
                CurrentDoctor={props.CurrentDoctor}
                comments={props.comments}
                type={props.type}
                setVisible={setVisible}
                visible={visible}
                getVisitTypePostLoading={props.getVisitTypePostLoading}
                getDoctorsConsultationsByMainTypePostLoading={props.getDoctorsConsultationsByMainTypePostLoading}
                GetDoctorsReviewsPost={props.GetDoctorsReviewsPost}

            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <PersonInfo
                CurrentDoctor={props.CurrentDoctor}
                doctorSpecial={props.doctorSpecial}
                serviceId={serviceId}
                doctorId={doctorId}
                CurrentVisitType={props.CurrentVisitType}
                SendMessagePost={props.SendMessagePost}
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Access setVisible={setVisible} visible={visible} />
          </SwiperSlide>
        </Swiper>
      </Drawer>
    </>
  );
}
