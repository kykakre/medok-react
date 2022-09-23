import React, {useEffect, useState} from "react";
import Search from "../Search/Search";
import Title from "../Title/Title";
import ServiceItem from "./ServiceItem";
import style from "./Service.module.scss";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import { Checkbox } from "antd";
export default function Service(props) {
    const[value,setValue] = useState(true)
    let item = props.service.map((e) => (
        <ServiceItem
            Id={e.Id}
            key={e.Id}
            img={e.PathToSpecializationAvatar}
            Title={e.Title}
            GetDoctorPost={props.GetDoctorPost}
            setServiceId={props.setServiceId}
        />));
  return (
    <>
      <Title
        arrow={false}
        title={"Выберите специализацию"}
        setVisible={props.setVisible}
        visible={props.visible}
      />
      <Search GetServicesPost={props.GetServicesPost}/>
        <div className={style.tabs}>
          <div className={style.tabsFlex}>
              {props.specialization.map((e)=>(
                  <div className={style.tabsTab} key={e.SpecializationType} onClick={()=>props.GetServicesPost("",e.SpecializationType,value)}>
                      {e.SpecializationTypeInStringFormat}

                  </div>
              ))}


          </div>

          <Checkbox value={value} onClick={()=>setValue(!value)}>Премиум</Checkbox>
        </div>
        <div className={style.special}>
          <div>{item}</div>
        </div>

      <ServiceBanner />
    </>
  );
}
