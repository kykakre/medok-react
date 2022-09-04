import React from "react";
import Search from "../Search/Search";
import Title from "../Title/Title";
import ServiceItem from "./ServiceItem";
import style from "./Service.module.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import { Checkbox } from "antd";
export default function Service(props) {
  const item = props.service.map((e) => (
    <ServiceItem
      id={e.id}
      key={e.id}
      title={e.title}
      type={e.type}
      icon={e.icon}
    />
  ));
  return (
    <>
      <Title
        arrow={false}
        title={"Выберите специализацию"}
        setVisible={props.setVisible}
        visible={props.visible}
      />
      <Search />
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
