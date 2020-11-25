import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import CarouselHome from "../../../components/CarouselHome";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StarsIcon from "@material-ui/icons/Stars";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SwitchMode from "../../../components/NavbarHome/NavbarComponent/SwitchMode";

const useStyles = makeStyles((theme) => ({
  appBarHome: {
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    opacity: 0.95,
  },
  appBarDiscovery: {
    bottom: "auto",
    top: 0,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    opacity: 0.95,
  },
  tabPanel: {
    padding: 0,
  },
  indicatorTop: {
    backgroundColor: theme.palette.action.selected,
  },
  indicatorBottom: {
    backgroundColor: theme.palette.action.selected,
    bottom: "unset",
    top: 0,
  },
  tabBottom: {
    backgroundColor: theme.palette.background.paper,
    fontSize: "8px",
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
  tabTop: {
    fontSize: "12px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function MobileHome(props) {
  const classes = useStyles();
  const [homeValue, setHomeValue] = useState("1");
  const [discoverValue, setDiscoverValue] = useState("1");

  const handleChangeHome = (event, newValue) => {
    setHomeValue(newValue);
  };
  const handleChangeDiscoveryTab = (event, newValue) => {
    setDiscoverValue(newValue);
  };

  //render discoveryTab
  const renderDiscoveryTab = () => {
    return (
      <React.Fragment>
        <TabContext value={discoverValue}>
          <AppBar position="static" className={classes.appBarDiscovery}>
            <TabList
              onChange={handleChangeDiscoveryTab}
              aria-label="tabs discovery"
              variant="fullWidth"
              TabIndicatorProps={{ className: classes.indicatorTop }}
            >
              <Tab label="Home" value="1" className={classes.tabTop} />
              <Tab label="Đang chiếu" value="2" className={classes.tabTop} />
              <Tab label="Sắp chiếu" value="3" className={classes.tabTop} />
            </TabList>
          </AppBar>
          {/* Home */}
          <TabPanel value="1">
            <CarouselHome />
          </TabPanel>
          {/* Đang chiếu tab */}
          <TabPanel value="2">Add thêm component film Đang chiếu</TabPanel>
          {/* Sắp chiếu tabs */}
          <TabPanel value="3">Add thêm component film Sắp chiếu</TabPanel>
        </TabContext>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <TabContext value={homeValue}>
        <TabPanel value="1" className={classes.tabPanel}>
          {/* add layout khám phá
            a navtabs with 3 tab: Home, Đang chiếu, Sắp chiếu
        */}
          {renderDiscoveryTab()}
        </TabPanel>
        <TabPanel value="2">Cụm rạp</TabPanel>
        <TabPanel value="3">Tin tức</TabPanel>
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
    </React.Fragment>
  );
}
