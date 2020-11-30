import { AppBar, Paper, Tab, Typography } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import React, { useState } from "react";
import CardNewsLarge from "../../../../components/CardNewsLarge/CardNewsLarge";
import CardSmallFilm from "../../../../components/CardSmall/CardSmallFilm";
import CardSmallNews from "../../../../components/CardSmall/CardSmallNews";
import WithCard from "../../../../components/CardSmall/WithCard";
import CarouselHome from "../../../../components/CarouselHome";
import Movie from "../../../../components/Movie";
import { newsArray } from "../NewsArray";
import { MobileHomeStyles } from "./MobileHomeStyles";

const CardNews = WithCard(CardSmallNews);
const CardFilm = WithCard(CardSmallFilm);

export default function DiscoveryTabs() {
  const classes = MobileHomeStyles();
  const [discoverValue, setDiscoverValue] = useState("1");
  const handleChangeDiscoveryTab = (event, newValue) => {
    setDiscoverValue(newValue);
  };
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
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.homeTitle}
          >
            Phim được yêu thích nhất
          </Typography>
          <Movie type="beingSold" />
          <Movie type="beingSold" />
          <Movie type="beingSold" />

          {/* render 3 items of CardFilm  */}
          <Paper className={classes.paperContainer}>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.paperTitle}
            >
              Rạp phim đang có gì
            </Typography>
            <CardFilm
              data={{
                imageLink:
                  "https://s3img.vcdn.vn/mobile/123phim/2020/10/tiec-trang-mau-blood-moon-party-16016226514166_215x318.png",
                title: "Tiệc trăng máu",
              }}
            />
            <CardFilm
              data={{
                imageLink:
                  "https://s3img.vcdn.vn/mobile/123phim/2020/10/tiec-trang-mau-blood-moon-party-16016226514166_215x318.png",
                title: "Tiệc trăng máu",
              }}
            />
            <CardFilm
              data={{
                imageLink:
                  "https://s3img.vcdn.vn/mobile/123phim/2020/10/tiec-trang-mau-blood-moon-party-16016226514166_215x318.png",
                title: "Tiệc trăng máu",
              }}
            />
          </Paper>

          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.homeTitle}
          >
            Tin nóng nhất hôm nay
          </Typography>

          {/* render 3 items of CardNewsLarge */}
          {newsArray.filmArr
            .filter((item, index) => {
              return index <= 2;
            })
            .map((item) => {
              return <CardNewsLarge data={item} key={item.id} />;
            })}

          {/* render 5 items of CardNews  */}
          <Paper className={classes.paperContainer}>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.paperTitle}
            >
              Lướt thêm tin mới nhé
            </Typography>
            {newsArray.promotionArr
              .filter((item, index) => {
                return index <= 4;
              })
              .map((item) => {
                return <CardNews data={item} key={item.id} />;
              })}
          </Paper>
        </TabPanel>

        {/* Đang chiếu tab */}
        <TabPanel value="2">
          <Movie type="beingSold" />
          <Movie type="beingSold" />
        </TabPanel>

        {/* Sắp chiếu tabs */}
        <TabPanel value="3">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </TabPanel>
      </TabContext>
    </React.Fragment>
  );
}
