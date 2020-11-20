import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Link,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#222",
    paddingTop: "20px",
    paddingBottom: "20px",
    color: "#949494",
  },
  container: {
    maxWidth: "940px",
    float: "none",
    margin: "auto",
    fontFamily: "font-family: 'SF Text Regular'",
  },
  link: {
    fontSize: "12px",
    fontWeight: "700",
    whiteSpace: "nowrap",
    color: "#949494",
    display: "block",
    transition: "all .2s",
    lineHeight: "2.3",
    textAlign: "center",
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
    },
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginRight: "15px",
    transition: "all .2s",
    "&:hover": {
      opacity: ".7",
    },
  },
  title: {
    color: "#fff",
    fontSize: "80%",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    padding: "0px 10px",
  },
  partnerRow: {
    marginBottom: "15px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  divider: {
    margin: "20px 0px",
    borderTop: "1px solid #4a4a4a",
  },
}));

export default function FooterHome() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={4} m={2}>
            <p className={classes.title}>Square</p>
            <Box mb={4}>
              <Grid container>
                <Grid item md={6} sm={12} xs={6}>
                  <Link href="" className={classes.link}>
                    FAQ
                  </Link>
                  <Link href="" className={classes.link}>
                    Brand Guidelines
                  </Link>
                </Grid>
                <Grid item md={6} sm={12} xs={6}>
                  <Link href="" className={classes.link}>
                    Thỏa thuận sử dụng
                  </Link>
                  <Link href="" className={classes.link}>
                    Chính sách bảo mật
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p className={classes.title}>Đối tác</p>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="row"
              className={classes.partnerRow}
            >
              <Link href="https://www.cgv.vn/" target="_blank">
                <Avatar
                  alt="cgv"
                  src="img/cgv.png"
                  style={{ background: "#fff" }}
                  className={classes.avatar}
                />
              </Link>
              <Link href="http://bhdstar.vn" target="_blank">
                <Avatar
                  alt="bhd"
                  src="img/bhd.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://www.galaxycine.vn/" target="_blank">
                <Avatar
                  alt="galaxy"
                  src="img/galaxycine.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://www.cinestar.com.vn/" target="_blank">
                <Avatar
                  alt="cinestar"
                  src="img/cinestar.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://www.lottecinemavn.com/" target="_blank">
                <Avatar
                  alt="lotte"
                  src="img/lotte.png"
                  className={classes.avatar}
                />
              </Link>
            </Box>
            <Box
              justifyContent="center"
              display="flex"
              flexDirection="row"
              className={classes.partnerRow}
            >
              <Link href="https://www.megagscinemas.vn/" target="_blank">
                <Avatar
                  alt="megags"
                  src="img/megags.png"
                  className={classes.avatar}
                />
              </Link>

              <Link href="https://www.betacineplex.vn/" target="_blank">
                <Avatar alt="bt" src="img/bt.jpg" className={classes.avatar} />
              </Link>
              <Link href="http://ddcinema.vn/" target="_blank">
                <Avatar
                  alt="dongdacinema"
                  src="img/dongdacinema.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://touchcinema.com/" target="_blank">
                <Avatar
                  alt="TOUCH"
                  src="img/TOUCH.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://cinemaxvn.com/" target="_blank">
                <Avatar
                  alt="cnx"
                  src="img/cnx.jpg"
                  className={classes.avatar}
                />
              </Link>
            </Box>
            <Box
              justifyContent="center"
              display="flex"
              flexDirection="row"
              className={classes.partnerRow}
            >
              <Link href="https://starlight.vn/" target="_blank">
                <Avatar
                  alt="starlight"
                  src="img/STARLIGHT.png"
                  className={classes.avatar}
                />
              </Link>

              <Link href="https://www.dcine.vn/" target="_blank">
                <Avatar
                  alt="dcine"
                  src="img/dcine.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://zalopay.vn/" target="_blank">
                <Avatar
                  alt="zalopay"
                  src="img/zalopay_icon.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://www.payoo.vn/" target="_blank">
                <Avatar
                  alt="payoo"
                  src="img/payoo.jpg"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://portal.vietcombank.com.vn/" target="_blank">
                <Avatar
                  alt="vietcombank"
                  src="img/VCB.png"
                  className={classes.avatar}
                />
              </Link>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="row"
              mb={4}
            >
              <Link href="https://www.agribank.com.vn/" target="_blank">
                <Avatar
                  alt="agribank"
                  src="img/AGRIBANK.png"
                  className={classes.avatar}
                />
              </Link>

              <Link
                href="https://www.vietinbank.vn/web/home/vn/index.html"
                target="_blank"
              >
                <Avatar
                  alt="viettinbank"
                  src="img/VIETTINBANK.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://www.indovinabank.com.vn/" target="_blank">
                <Avatar
                  alt="indovi"
                  src="img/IVB.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://webv3.123go.vn/" target="_blank">
                <Avatar
                  alt="123go"
                  src="img/123go.png"
                  className={classes.avatar}
                />
              </Link>
              <Link href="https://laban.vn/" target="_blank">
                <Avatar
                  alt="laban"
                  src="img/laban.png"
                  className={classes.avatar}
                />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid item md={6} sm={12} xs={6}>
                <p className={classes.title}>mobile app</p>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Link
                    href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    target="_blank"
                  >
                    <Avatar
                      style={{ margin: "5px" }}
                      alt="apple"
                      src="img/apple-logo.png"
                      className={classes.avatar}
                    />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    target="_blank"
                  >
                    <Avatar
                      style={{ margin: "5px" }}
                      alt="android"
                      src="img/android-logo.png"
                      className={classes.avatar}
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item md={6} sm={12} xs={6}>
                <p className={classes.title}>social</p>
                <Box display="flex" justifyContent="center">
                  <Link href="https://www.facebook.com/tix.vn/" target="_blank">
                    <Avatar
                      alt="facebook"
                      src="img/facebook-logo.png"
                      className={classes.avatar}
                      style={{ margin: "5px" }}
                    />
                  </Link>
                  <Link href="https://zalo.me/tixdatve" target="_blank">
                    <Avatar
                      alt="zalo"
                      src="img/zalo-logo.png"
                      className={classes.avatar}
                      style={{ margin: "5px" }}
                    />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <p className={classes.title}>
          SQUARE - HDL - TIX MOVIE RESERVATION CLONE
        </p>
      </div>
    </div>
  );
}
