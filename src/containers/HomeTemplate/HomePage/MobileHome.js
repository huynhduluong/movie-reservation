import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import CarouselHome from "../../../components/CarouselHome";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export default function MobileHome() {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <CarouselHome />

      <TabContext value={value}>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <AppBar position="fixed" className={classes.appBar}>
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab value="1">Khám phá</Tab>
            <Tab value="2">Cụm rạp</Tab>
            <Tab value="3">Tin tức</Tab>
            <Tab value="4">Đăng nhập</Tab>
          </TabList>
        </AppBar>
      </TabContext>
    </React.Fragment>
  );
}
