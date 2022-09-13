import React, {useEffect} from "react";
import Search from "../Search/Search";
import Title from "../Title/Title";
import ServiceItem from "./ServiceItem";
import style from "./Service.module.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import { Checkbox } from "antd";
export default function Service(props) {
    let item = props.service.map((e) => (
        <ServiceItem
            Id={e.Id}
            key={e.Id}
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
      <Tabs>
        <TabList className={style.tabs}>
          <div className={style.tabsFlex}>
            <Tab className={style.tabsTab} selectedClassName={style.activeTab}>
              Взрослым
            </Tab>
            <Tab className={style.tabsTab} selectedClassName={style.activeTab}>
              Детям
            </Tab>
          </div>

          <Checkbox>Премиум</Checkbox>
        </TabList>
        <TabPanel className={style.special}>
          <div>{item}</div>
        </TabPanel>
        <TabPanel className={style.special}>{item}</TabPanel>
      </Tabs>

      <ServiceBanner />
    </>
  );
}
