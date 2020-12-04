import React from "react";
import { DesktopHomeStyle } from "../HomePage/DesktopComponent/DesktopHomeStyle";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import { Box, makeStyles } from "@material-ui/core";
import LogoCinema from "../../../components/LogoCinema";
import ShowTimeList from "../../../components/ShowTimeList";
import { CustomScrollbars } from "../../../components/ScrollBar";

const useStyles = makeStyles((theme) => ({
  backgroundSection: {
    background: "rgb(10,32,41)",
  },
  sectionWidth: {
    maxWidth: "940px",
    margin: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    minHeight: "705px",
  },
  tabPanel: { marginTop: "30px" },
}));

export default function DetailFilmPage() {
  const [value, setValue] = React.useState("1");
  const desktopStyle = DesktopHomeStyle();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.backgroundSection}>
      <div className={classes.sectionWidth}>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            centered
            aria-label="simple tabs example"
          >
            <Tab
              label="Lịch chiếu"
              value="1"
              className={
                value === "1" ? desktopStyle.tabActive : desktopStyle.tabNormal
              }
            />
            <Tab
              label="Thông tin"
              value="2"
              className={
                value === "2" ? desktopStyle.tabActive : desktopStyle.tabNormal
              }
            />
            <Tab
              label="Đánh giá"
              value="3"
              className={
                value === "3" ? desktopStyle.tabActive : desktopStyle.tabNormal
              }
            />
          </Tabs>

          {/* Lịch chiếu tabs */}
          <TabPanel value="1" className={classes.tabPanel}>
            <Box display="flex" justifyContent="center">
              <LogoCinema />
              <CustomScrollbars className={desktopStyle.showTimeScrollBar}>
                <ShowTimeList />
              </CustomScrollbars>
            </Box>
          </TabPanel>

          <TabPanel value="2" className={classes.tabPanel}>
            Tab 2
          </TabPanel>

          <TabPanel value="3" className={classes.tabPanel}>
            Tab 3
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}
