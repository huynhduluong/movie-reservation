import React from "react";
import { DesktopHomeStyle } from "../HomePage/DesktopComponent/DesktopHomeStyle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import LogoCinema from "../../../components/LogoCinema";
import ShowTimeList from "../../../components/ShowTimeList";
import { CustomScrollbars } from "../../../components/ScrollBar";
import RatingStar from "../../../components/RatingStar";
import CommentItem from "../../../components/CommentItem";

const useStyles = makeStyles((theme) => ({
  backgroundSection: {
    background: theme.palette.background.default,
  },
  sectionWidth: {
    paddingBottom: "50px",
    minHeight: "705px",
    transform: "translateY(-50px)",
  },
  tabPanel: { marginTop: "30px" },
  bgTop: {
    backgroundImage:
      "url(https://movie0706.cybersoft.edu.vn/hinhanh/the-longest-ride_gp09.jpg)",
    backgroundRepeat: "none",
    backgroundPositionY: "40%",
    backgroundSize: "cover",
    paddingTop: "450px",
    filter: "blur(15px)",
  },
  detailMainInfo: {
    position: "absolute",
    top: "50%",
    width: "100%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  mainMaxWidth: {
    maxWidth: "870px",
    margin: "auto",
    padding: "0px 15px",
  },
  mainMaxWidthMobile: {
    margin: "auto",
    padding: 0,
    overflowX: "hidden",
  },
  posterMain: {
    borderRadius: "4px",
    paddingTop: "147.90697674%",
    backgroundPosition: "center,0 0",
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat,repeat-y",
  },
  mainHeightTop: {
    position: "relative",
    maxHeight: "450px",
    overflow: "hidden",
  },
  styleGradient: {
    top: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    background: `linear-gradient(to top,${theme.palette.background.default} , transparent 100%)`,
  },
  detailMainInfo1: {
    fontSize: "14px",
    color: theme.palette.primary,
  },
  detailMainInfo2: {
    fontSize: "24px",
    color: theme.palette.primary,
    marginBottom: 0,
    whiteSpace: "nowrap",
    "& span": {
      marginRight: "6px",
      marginTop: "6px",
      float: "left",
      backgroundColor: "#fb4226",
      color: "#fff",
      fontSize: "16px",
      borderRadius: "4px",
      padding: "0 5px",
      display: "inline-block",
      textAlign: "center",
      minWidth: "33px",
    },
  },
  btnBuyTicketDetail: {
    fontSize: "16px",
    borderRadius: "4px",
    textAlign: "center",
    background: "0 0",
    padding: "7px 25px",
    transition: "all .2s",
    marginTop: "25px",
    marginBottom: "20px",
    backgroundColor: " #fb4226",
    border: "none",
    color: "#fff",
    maxWidth: "130px",
  },
  scoreReview: {
    fontSize: "2rem",
    color: "#fff",
  },
  ratingStar: {
    marginTop: "10px",
    fontSize: "25px",
  },
  newDesign: {
    maxWidth: "580px",
    margin: "0 calc(50% - 290px)",
  },
  dadInputReviewer: {
    position: "relative",
    cursor: "pointer",
  },
  inputReviwer: {
    appearance: "none",
    padding: "10px 10px 10px 55px",
    width: "100%",
    height: "60px",
    borderRadius: "4px",
    border: "1px solid #e8e8e9",
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontSize: "14px",
    cursor: "pointer",
  },
  reviewStar: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "3%",
    opacity: 0.5,
    fontSize: "30px",
  },
  accountIcon: {
    position: "absolute",
    color: theme.palette.text.primary,
    top: "50%",
    left: "2%",
    opacity: 0.5,
    fontSize: "40px",
    transform: "translateY(-50%)",
  },
}));

export default function DetailFilmPage() {
  const [value, setValue] = React.useState("1");
  const matchBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down("xs")
  );
  const desktopStyle = DesktopHomeStyle();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.backgroundSection}>
      <Hidden only="xs">
        <div className={classes.mainHeightTop}>
          <div className={classes.bgTop}></div>
          <div className={classes.styleGradient}></div>
          <div className={`${classes.detailMainInfo} ${classes.mainMaxWidth}`}>
            <Grid container>
              <Grid item xs={3}>
                <div
                  className={classes.posterMain}
                  style={{
                    backgroundImage:
                      "url(https://movie0706.cybersoft.edu.vn/hinhanh/the-longest-ride_gp09.jpg)",
                  }}
                ></div>
              </Grid>
              <Grid item xs={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  textAlign="left"
                  flexDirection="column"
                  mx={2}
                  style={{ height: "100%" }}
                >
                  <span className={classes.detailMainInfo1}>20.11.2020</span>
                  <p className={classes.detailMainInfo2}>
                    <span>C18</span>Trái Tim Quái Vật
                  </p>
                  <span className={classes.detailMainInfo1}>
                    89 phút - 0 IMDb - 2D/Digital
                  </span>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btnBuyTicketDetail}
                  >
                    Mua vé
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  display="inline-flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Box position="relative" display="block">
                    <CircularProgress variant="static" size={100} value={69} />
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                        className={classes.scoreReview}
                      >
                        6.9
                      </Typography>
                    </Box>
                  </Box>
                  <RatingStar className={classes.ratingStar}>6.9</RatingStar>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </Hidden>
      <div
        className={
          matchBreakpoint
            ? `${classes.mainMaxWidthMobile}`
            : `${classes.sectionWidth} ${classes.mainMaxWidth}`
        }
      >
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
          {value === "1" ? (
            <TabPanel value="1" className={classes.tabPanel}>
              <Box display="flex" justifyContent="center">
                <LogoCinema detailPage="true" />
                <CustomScrollbars className={desktopStyle.showTimeScrollBar}>
                  <ShowTimeList />
                </CustomScrollbars>
              </Box>
            </TabPanel>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          {/* Render thông tin film */}
          {value === "2" ? (
            <TabPanel value="2" className={classes.tabPanel}>
              <Box px={2}>
                <Grid container>
                  <Grid item sm={6} xs={12}>
                    <Box>
                      <Grid container>
                        <Grid item sm={5}>
                          <Typography variant="body1" color="textPrimary">
                            Ngày công chiếu
                          </Typography>
                        </Grid>
                        <Grid item sm={7}>
                          <Typography variant="body1" color="textSecondary">
                            20.11.2020
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mt={2}>
                      <Grid container>
                        <Grid item sm={5}>
                          <Typography variant="body1" color="textPrimary">
                            Định dạng
                          </Typography>
                        </Grid>
                        <Grid item sm={7}>
                          <Typography variant="body1" color="textSecondary">
                            2D/Digital
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Typography variant="body1" color="textPrimary">
                      Nội dung:
                    </Typography>
                    <br />
                    <Typography variant="body1" color="textSecondary">
                      ‘Trái Tim Quái Vật’ là một câu chuyện đậm chất thriller kể
                      về Khánh (Hoàng Thùy Linh) – một người mẹ đơn thân với
                      khao khát được sống và làm ăn lương thiện nhưng không may
                      vướng vào vòng xoáy tội ác. Liệu sự thật ở phía sau là gì?
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          {/* Render đánh giá phim */}
          {value === "3" ? (
            <TabPanel value="3" className={classes.tabPanel}>
              <Grid>
                <Grid
                  item
                  xs={12}
                  className={
                    matchBreakpoint
                      ? classes.dadInputReviewer
                      : `${classes.newDesign} ${classes.dadInputReviewer}`
                  }
                >
                  <AccountCircleIcon className={classes.accountIcon} />
                  <input
                    className={classes.inputReviwer}
                    type="text"
                    placeholder="Bạn nghĩ gì về phim này?"
                    readonly="readonly"
                  />
                  <Hidden only="xs">
                    <RatingStar className={classes.reviewStar}>10</RatingStar>
                  </Hidden>
                </Grid>
              </Grid>
              <CommentItem
                className={matchBreakpoint ? "" : `${classes.newDesign}`}
              />
              <CommentItem
                className={matchBreakpoint ? "" : `${classes.newDesign}`}
              />
              <CommentItem
                className={matchBreakpoint ? "" : `${classes.newDesign}`}
              />
            </TabPanel>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </TabContext>
      </div>
    </div>
  );
}
