import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Service from "../Service/Service";
import Doctor from "../Doctor/Doctor";
import Type from "../Type/Type.jsx";
import PersonInfo from "../PersonInfo/PersonInfo.jsx";
import Access from "../Access/Access.jsx";
export default function DrawerComponent(props) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Открыть дравер
      </Button>
      <Drawer
        closable={false}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".next", prevEl: ".header__arrow" }}
          slidesPerView={1}
          effect="creative"
          allowTouchMove={false}
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
          <SwiperSlide className="slide">
            <Service
              setVisible={setVisible}
              visible={visible}
              service={props.service}
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Doctor
              doctor={props.doctor}
              setVisible={setVisible}
              visible={visible}
            />
          </SwiperSlide>
          <SwiperSlide className='slide'>
              <Type
              doctor={props.doctor}
              type={props.type}
              setVisible={setVisible}
              visible={visible}
          />
          </SwiperSlide>
          <SwiperSlide className="slide"><PersonInfo doctor={props.doctor} type={props.type} /></SwiperSlide>
            <SwiperSlide className="slide"><Access setVisible={setVisible}
                                                   visible={visible}/></SwiperSlide>
        </Swiper>
      </Drawer>
    </>
  );
}
