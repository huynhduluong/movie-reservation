import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { NewInput, UserStyles } from "./UserStyles";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.matKhau) {
    errors.matKhau = "Vui lòng nhập mật khẩu";
  } else if (values.matKhau.length < 6) {
    errors.matKhau = "Mật khẩu phải có ít nhất 6 ký tự";
  }

  if (!values.hoTen) {
    errors.hoTen = "Vui lòng nhập họ tên";
  } else if (
    !/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/.test(
      values.hoTen
    )
  ) {
    errors.hoTen = "Họ tên không hợp lệ";
  }

  if (!values.email) {
    errors.email = "Vui lòng nhập email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email không hợp lệ";
  }

  if (!values.soDt) {
    errors.soDt = "Vui lòng nhập số ĐT";
  } else if (!/^\d{10}$/i.test(values.soDt)) {
    errors.soDt = "Số ĐT không hợp lệ";
  }

  return errors;
};

function UserGuestPage(props) {
  const classes = UserStyles();

  const user = props.user || JSON.parse(localStorage.getItem("UserGuest"));

  const [value, setValue] = useState("info");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ValidationForm = () => {
    const formik = useFormik({
      initialValues: {
        taiKhoan: "huynhduluong137",
        matKhau: "Luong123",
        hoTen: "Huỳnh Du Lượng",
        email: "huynhduluong@gmail.com",
        soDt: "0908328143",
      },
      validate,
      onSubmit: (values) => {
        console.log(values);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="taiKhoan" className={classes.label}>
                  Tài khoản
                </InputLabel>
                <NewInput
                  defaultValue={formik.values.taiKhoan}
                  type="text"
                  disabled
                  id="taiKhoan"
                  name="taiKhoan"
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="matKhau" className={classes.label}>
                  Mật Khẩu
                </InputLabel>
                <NewInput
                  defaultValue={formik.values.matKhau}
                  type="password"
                  id="matKhau"
                  name="matKhau"
                  onChange={formik.handleChange}
                />
                {formik.errors.matKhau ? (
                  <div className={classes.error}>{formik.errors.matKhau}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </FormControl>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="hoTen" className={classes.label}>
                  Họ Tên
                </InputLabel>
                <NewInput
                  defaultValue={formik.values.hoTen}
                  id="hoTen"
                  name="hoTen"
                  type="text"
                  onChange={formik.handleChange}
                />
                {formik.errors.hoTen ? (
                  <div className={classes.error}>{formik.errors.hoTen}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </FormControl>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="email" className={classes.label}>
                  Email
                </InputLabel>
                <NewInput
                  defaultValue={formik.values.email}
                  name="email"
                  type="text"
                  id="email"
                  onChange={formik.handleChange}
                />
                {formik.errors.email ? (
                  <div className={classes.error}>{formik.errors.email}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </FormControl>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="soDt" className={classes.label}>
                  Số Điện Thoại
                </InputLabel>
                <NewInput
                  defaultValue={formik.values.soDt}
                  name="soDt"
                  type="text"
                  id="soDt"
                  onChange={formik.handleChange}
                />
                {formik.errors.soDt ? (
                  <div className={classes.error}>{formik.errors.soDt}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    );
  };

  if (!user) {
    return <Redirect to="/dang-nhap" />;
  }

  return (
    <div>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          centered
          aria-label="User info tab"
        >
          <Tab
            label="Thông tin"
            value="info"
            className={value === "info" ? classes.tabActive : classes.tabNormal}
          />
          <Tab
            label="Lịch sử đặt vé"
            value="history"
            className={
              value === "history" ? classes.tabActive : classes.tabNormal
            }
          />
        </Tabs>
        <TabPanel value="info">
          <Box
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Paper className={classes.container}>{ValidationForm()}</Paper>
          </Box>
        </TabPanel>
        <TabPanel value="history">
          <Box
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Paper className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <img
                    src={`http://movie0706.cybersoft.edu.vn/hinhanh/ted-part-2_gp09.jfif`}
                    alt={`http://movie0706.cybersoft.edu.vn/hinhanh/ted-part-2_gp09.jfif`}
                    className={classes.image}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Box className={classes.content}>
                    <Typography component="h5" variant="h5">
                      Tên phim
                    </Typography>
                    <Box display="flex">
                      <span className={classes.ageLimitButton}>C18</span>
                    </Box>
                    <p>Ngày chiếu</p>
                    <p>Giờ chiếu</p>
                    <p>Tên cụm rạp</p>
                    <p>Tên rạp - số ghế</p>
                    <p>Số tiền</p>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <img
                    src={`http://movie0706.cybersoft.edu.vn/hinhanh/ted-part-2_gp09.jfif`}
                    alt={`http://movie0706.cybersoft.edu.vn/hinhanh/ted-part-2_gp09.jfif`}
                    className={classes.image}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Box className={classes.content}>
                    <Typography component="h5" variant="h5">
                      Tên phim
                    </Typography>
                    <Box display="flex">
                      <span className={classes.ageLimitButton}>C18</span>
                    </Box>
                    <p>Ngày chiếu</p>
                    <p>Giờ chiếu</p>
                    <p>Tên cụm rạp</p>
                    <p>Tên rạp - số ghế</p>
                    <p>Số tiền</p>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <img
                    src={`http://movie0706.cybersoft.edu.vn/hinhanh/ted-part-2_gp09.jfif`}
                    alt={`http://movie0706.cybersoft.edu.vn/hinhanh/ted-part-2_gp09.jfif`}
                    className={classes.image}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Box className={classes.content}>
                    <Typography component="h5" variant="h5">
                      Tên phim
                    </Typography>
                    <Box display="flex">
                      <span className={classes.ageLimitButton}>C18</span>
                    </Box>
                    <p>Ngày chiếu</p>
                    <p>Giờ chiếu</p>
                    <p>Tên cụm rạp</p>
                    <p>Tên rạp - số ghế</p>
                    <p>Số tiền</p>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </TabPanel>
      </TabContext>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleDispatchLogin: (data) => {
//       dispatch(actLoginSuccess(data));
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    user: state.loginUserReducer.data,
  };
};

export default connect(mapStateToProps)(UserGuestPage);
