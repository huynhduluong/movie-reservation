import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StarsIcon from "@material-ui/icons/Stars";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SwitchMode from "../../../components/NavbarHome/NavbarComponent/SwitchMode";
import NewsTabs from "./MobileComponent/NewsTabs";
import { MobileHomeStyles } from "./MobileComponent/MobileHomeStyles";
import DiscoveryTabs from "./MobileComponent/DiscoveryTabs";
import CinemaTabs from "./MobileComponent/CinemaTabs";

export default function MobileHome(props) {
  const classes = MobileHomeStyles();
  const [homeValue, setHomeValue] = useState("1");

  const handleChangeHome = (event, newValue) => {
    setHomeValue(newValue);
  };

  return (
    <React.Fragment>
      <TabContext value={homeValue}>
        <TabPanel value="1" className={classes.tabPanel}>
          {/* add layout khám phá
            a navtabs with 3 tab: Home, Đang chiếu, Sắp chiếu
        */}
          <DiscoveryTabs />
        </TabPanel>
        <TabPanel value="2">
          Cụm rạp
          <CinemaTabs />
        </TabPanel>
        <TabPanel value="3">
          {/* add layout khám phá
            a navtabs with 3 tab: Điện ảnh, Đánh giá, Khuyến mãi
        */}
          <NewsTabs />
        </TabPanel>
        <TabPanel value="4">
          <h1>Đăng nhập</h1>
          <SwitchMode />
        </TabPanel>
        <AppBar position="fixed" className={classes.appBarHome}>
          <TabList
            onChange={handleChangeHome}
            aria-label="home tabs"
            variant="fullWidth"
            TabIndicatorProps={{ className: classes.indicatorBottom }}
          >
            <Tab
              icon={<StarsIcon />}
              label="Khám phá"
              value="1"
              className={classes.tabBottom}
            />
            <Tab
              icon={<PersonalVideoIcon />}
              label="Cụm rạp"
              value="2"
              className={classes.tabBottom}
            />
            <Tab
              icon={<LibraryBooksIcon />}
              label="Tin tức"
              value="3"
              className={classes.tabBottom}
            />
            <Tab
              icon={<AccountCircleIcon />}
              label="Tài Khoản"
              value="4"
              className={classes.tabBottom}
            />
          </TabList>
        </AppBar>
      </TabContext>
      <div className={classes.maxHeightApp}></div>
    </React.Fragment>
  );
}
