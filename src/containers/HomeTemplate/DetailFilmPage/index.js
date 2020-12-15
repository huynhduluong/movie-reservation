import React from "react";
import { DesktopHomeStyle } from "../HomePage/DesktopComponent/DesktopHomeStyle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
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

const lichChieuArr = {
  heThongRapChieu: [
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: "16099",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-01T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16100",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-01T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16101",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-01T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16102",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-01T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16103",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-01T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16104",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-01T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16105",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-02T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16106",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-02T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16107",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-02T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16108",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-02T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16109",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-02T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16110",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-02T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16111",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-03T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16112",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-03T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16113",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-03T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16114",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-03T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16115",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-03T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16116",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-03T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16117",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-04T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16118",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-04T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16119",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-04T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16120",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-04T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16121",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-04T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16122",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-04T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16123",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-05T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16124",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-05T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16125",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-05T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16126",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-05T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16127",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-05T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16128",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-05T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16129",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-06T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16130",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-06T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16131",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-06T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16132",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-06T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16133",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-06T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16134",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-06T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16135",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-07T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16136",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-07T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16137",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-07T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16138",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-07T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16139",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-07T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16140",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-07T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16141",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-08T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16142",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-08T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16143",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-08T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16144",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-08T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16145",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-08T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16146",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-08T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16147",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-09T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16148",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-09T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16149",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-09T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16150",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-09T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16151",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-09T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "16152",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-09T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40272",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2020-03-20T02:12:03",
              giaVe: 80000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40277",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-05-24T09:30:00",
              giaVe: 80000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40280",
              maRap: "469",
              tenRap: "Rạp 9",
              ngayChieuGioChieu: "2020-03-20T05:00:10",
              giaVe: 78900,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40285",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2020-03-25T06:27:47",
              giaVe: 79800,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40498",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2020-08-31T09:30:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40503",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2020-09-17T00:00:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40616",
              maRap: "462",
              tenRap: "Rạp 2",
              ngayChieuGioChieu: "2020-11-05T00:41:00",
              giaVe: 120000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40617",
              maRap: "464",
              tenRap: "Rạp 4",
              ngayChieuGioChieu: "2020-11-05T00:41:00",
              giaVe: 120000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "bhd-star-cineplex-bitexco",
          tenCumRap: "BHD Star Cineplex - Bitexco",
          hinhAnh: null,
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: "40540",
              maRap: "451",
              tenRap: "Rạp 1",
              ngayChieuGioChieu: "2020-10-13T01:56:49",
              giaVe: 80000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "bhd-star-cineplex-3-2",
          tenCumRap: "BHD Star Cineplex - 3/2",
          hinhAnh: null,
        },
      ],
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: "40286",
              maRap: "545",
              tenRap: "Rạp 5",
              ngayChieuGioChieu: "2020-03-27T11:40:37",
              giaVe: 80000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40287",
              maRap: "543",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2020-03-27T12:01:54",
              giaVe: 90000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cgv-crescent-mall",
          tenCumRap: "CGV - Crescent Mall",
          hinhAnh: null,
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: "40586",
              maRap: "511",
              tenRap: "Rạp 1",
              ngayChieuGioChieu: "2020-11-06T17:38:00",
              giaVe: 120000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40737",
              maRap: "512",
              tenRap: "Rạp 2",
              ngayChieuGioChieu: "2020-11-14T10:30:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40746",
              maRap: "511",
              tenRap: "Rạp 1",
              ngayChieuGioChieu: "2020-11-17T12:00:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cgv-aeon-binh-tan",
          tenCumRap: "CGV - Aeon Bình Tân",
          hinhAnh: null,
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: "40705",
              maRap: "524",
              tenRap: "Rạp 4",
              ngayChieuGioChieu: "2020-11-13T10:30:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cgv-aeon-tan-phu",
          tenCumRap: "CGV - Aeon Tân Phú",
          hinhAnh: null,
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: "40706",
              maRap: "695",
              tenRap: "Rạp 5",
              ngayChieuGioChieu: "2020-11-20T10:30:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cgv-vincom-landmark-81",
          tenCumRap: "CGV - Vincom Landmark 81",
          hinhAnh: null,
        },
      ],
      maHeThongRap: "CGV",
      tenHeThongRap: "cgv",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: "29917",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29918",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29919",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29920",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29921",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29922",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29923",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-02T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29924",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-02T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29925",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-02T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29926",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-02T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29927",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-02T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29928",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-02T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29929",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-03T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29930",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-03T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29931",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-03T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29932",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-03T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29933",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-03T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29934",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-03T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29935",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-04T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29936",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-04T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29937",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-04T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29938",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-04T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29939",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-04T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29940",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-04T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29941",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-05T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29942",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-05T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29943",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-05T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29944",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-05T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29945",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-05T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29946",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-05T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29947",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-06T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29948",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-06T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29949",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-06T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29950",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-06T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29951",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-06T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29952",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-06T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29953",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-07T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29954",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-07T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29955",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-07T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29956",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-07T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29957",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-07T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29958",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-07T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29959",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-08T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29960",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-08T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29961",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-08T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29962",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-08T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29963",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-08T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29964",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-08T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29965",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-09T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29966",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-09T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29967",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-09T14:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29968",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-09T16:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29969",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-09T18:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29970",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-09T20:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40711",
              maRap: "724",
              tenRap: "Rạp 4",
              ngayChieuGioChieu: "2020-11-29T10:30:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cns-hai-ba-trung",
          tenCumRap: "CNS - Hai Bà Trưng",
          hinhAnh: null,
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: "40291",
              maRap: "739",
              tenRap: "Rạp 9",
              ngayChieuGioChieu: "2020-04-04T04:45:18",
              giaVe: 100000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40292",
              maRap: "739",
              tenRap: "Rạp 9",
              ngayChieuGioChieu: "2020-04-24T02:18:00",
              giaVe: 100000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cns-quoc-thanh",
          tenCumRap: "CNS - Quốc Thanh",
          hinhAnh: null,
        },
      ],
      maHeThongRap: "CineStar",
      tenHeThongRap: "CineStar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: "40330",
              maRap: "903",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2020-04-20T05:20:48",
              giaVe: 90000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "megags-cao-thang",
          tenCumRap: "MegaGS - Cao Thắng",
          hinhAnh: null,
        },
      ],
      maHeThongRap: "MegaGS",
      tenHeThongRap: "MegaGS",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    },
  ],
  maPhim: 1314,
  tenPhim: "13 Reasons Why",
  biDanh: "13-reasons-why",
  trailer: "https://www.youtube.com/embed/1HpZevFifuo",
  hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.jpg",
  moTa:
    "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
  maNhom: "GP01",
  ngayKhoiChieu: "2020-12-13T20:10:50.163",
  danhGia: 10,
};

const useStyles = makeStyles((theme) => ({
  backgroundSection: {
    background: theme.palette.background.default,
  },
  sectionWidth: {
    paddingBottom: "50px",
    minHeight: "705px",
    transform: "translateY(-50px)",
  },
  tabPanelDesktop: { marginTop: "30px" },
  tabPanelMobile: { marginTop: "10px" },
  bgTop: {
    backgroundRepeat: "none",
    backgroundPositionY: "40%",
    backgroundSize: "cover",
    paddingTop: "450px",
    filter: "blur(15px)",
  },
  tabNormal: {
    backgroundColor: "transparent",
    textTransform: "capitalize",
    border: "none",
    transition: "all .2s",
    lineHeight: "24px",
    height: "24px",
    fontSize: "14px",
    "&:hover": {
      fontSize: "18px",
    },
  },
  tabActive: {
    backgroundColor: "transparent",
    textTransform: "capitalize",
    border: "none",
    transition: "all .2s",
    lineHeight: "24px",
    height: "24px",
    fontSize: "18px",
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
    marginLeft: "calc(50% - 290px)",
    marginRight: "calc(50% - 290px)",
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
  cardRoot: {
    marginBottom: "15px",
  },
  cardMedia: {
    height: 0,
    paddingTop: "150%",
    width: "100%",
  },
  cardActionArea: {
    position: "relative",
    "&:focus": {
      outline: "none",
    },
  },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, black, transparent)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      {/* Large Image and Rating on the top of page */}
      <Hidden only="xs">
        <div className={classes.mainHeightTop}>
          <div
            className={classes.bgTop}
            style={{
              backgroundImage:
                "url(https://movie0706.cybersoft.edu.vn/hinhanh/the-longest-ride_gp09.jpg)",
            }}
          ></div>
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

      {/* 3 tabs: lich chieu; thong tin; danh gia */}
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
            indicatorColor="none"
          >
            <Tab
              label="Lịch chiếu"
              value="1"
              className={value === "1" ? classes.tabActive : classes.tabNormal}
              style={matchBreakpoint ? { width: "33.33%" } : { width: "auto" }}
            />
            <Tab
              label="Thông tin"
              value="2"
              className={value === "2" ? classes.tabActive : classes.tabNormal}
              style={matchBreakpoint ? { width: "33.33%" } : { width: "auto" }}
            />
            <Tab
              label="Đánh giá"
              value="3"
              className={value === "3" ? classes.tabActive : classes.tabNormal}
              style={matchBreakpoint ? { width: "33.33%" } : { width: "auto" }}
            />
          </Tabs>

          {/* Lịch chiếu tabs */}
          {value === "1" ? (
            <TabPanel
              value="1"
              className={
                matchBreakpoint
                  ? classes.tabPanelMobile
                  : classes.tabPanelDesktop
              }
            >
              <Hidden only="xs">
                <Box display="flex" justifyContent="center">
                  <CustomScrollbars
                    className={desktopStyle.showTimeScrollBar}
                  ></CustomScrollbars>
                </Box>
              </Hidden>
            </TabPanel>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          {/* Render thông tin film */}
          {value === "2" ? (
            <TabPanel
              value="2"
              className={
                matchBreakpoint
                  ? classes.tabPanelMobile
                  : classes.tabPanelDesktop
              }
            >
              <Hidden smUp>
                <Card className={classes.cardRoot}>
                  <CardActionArea className={classes.cardActionArea}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://movie0706.cybersoft.edu.vn/hinhanh/the-longest-ride_gp09.jpg"
                      title="Contemplative Reptile"
                    />
                    <div className={classes.cardOverlay}>
                      <img src="img/play-video.png" alt="playButton" />
                    </div>
                  </CardActionArea>
                </Card>
              </Hidden>

              <Box px={2}>
                <Grid container>
                  <Grid item sm={5} xs={12}>
                    <Hidden only="xs">
                      <Box>
                        <Grid container>
                          <Grid item sm={7}>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              style={{ marginRight: "5px" }}
                            >
                              Ngày công chiếu:
                            </Typography>
                          </Grid>
                          <Grid item sm={5}>
                            <Typography variant="body1" color="textSecondary">
                              20.11.2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box my={2}>
                        <Grid container>
                          <Grid item sm={7}>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              style={{ marginRight: "5px" }}
                            >
                              Định dạng:
                            </Typography>
                          </Grid>
                          <Grid item sm={5}>
                            <Typography variant="body1" color="textSecondary">
                              2D/Digital
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Hidden>
                    <Hidden smUp>
                      <Typography variant="h4" color="textPrimary">
                        Trái tim quái vật
                      </Typography>
                      <Box my={2}>
                        <Typography variant="body1" color="textSecondary">
                          20.11.2020 - Square 6.9
                        </Typography>
                      </Box>
                    </Hidden>
                  </Grid>
                  <Grid item sm={7} xs={12}>
                    <Typography variant="body1" color="textPrimary">
                      Nội dung
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
            <TabPanel
              value="3"
              className={
                matchBreakpoint
                  ? classes.tabPanelMobile
                  : classes.tabPanelDesktop
              }
            >
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
