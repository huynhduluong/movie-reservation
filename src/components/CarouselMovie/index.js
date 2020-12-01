import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";
import { makeStyles } from "@material-ui/core";

//adjust properties of EffectCoverflow
EffectCoverflow.params.coverflowEffect = {
  ...EffectCoverflow.params.coverflowEffect,
  depth: 500,
  rotate: 60,
};
SwiperCore.use([EffectCoverflow, Pagination]);

const movieList = [
  {
    maPhim: 1314,
    tenPhim: "13 Reasons Why",
    biDanh: "13-reasons-why",
    trailer: "https://www.youtube.com/embed/1HpZevFifuo",
    hinhAnh:
      "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.PNG",
    moTa:
      "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-30T17:53:26.577",
    danhGia: 10,
  },
  {
    maPhim: 1329,
    tenPhim: "Dao Kinh Hoang",
    biDanh: "dao-kinh-hoang",
    trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
    hinhAnh:
      "http://movie0706.cybersoft.edu.vn/hinhanh/dao-kinh-hoang_gp01.jpg",
    moTa: "Người càng xinh đẹp, càng dễ lừa dối người khác",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-11T00:00:00",
    danhGia: 10,
  },
  {
    maPhim: 1344,
    tenPhim: "Gia dinh",
    biDanh: "gia-dinh",
    trailer: "string",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/gia-dinh_gp01.jpg",
    moTa: "string",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-30T00:00:00",
    danhGia: 10,
  },
  {
    maPhim: 1359,
    tenPhim: "Vợ ba",
    biDanh: "vo-ba",
    trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/vo-ba_gp01.jpg",
    moTa: "Mắt lác quá",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-22T00:00:00",
    danhGia: 10,
  },
  {
    maPhim: 1374,
    tenPhim: "Natra Two",
    biDanh: "natra-two",
    trailer: "https://www.youtube.com/embed/U-MxFzqU3QA",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/natra-two_gp01.jpg",
    moTa: "abcd",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-30T00:00:00",
    danhGia: 10,
  },
  {
    maPhim: 1389,
    tenPhim: "Diep Van",
    biDanh: "diep-van",
    trailer: "https://www.youtube.com/embed/1HpZevFifuo",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/diep-van_gp01.jpg",
    moTa: "Mắt hút",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-04-30T00:00:00",
    danhGia: 9,
  },
  {
    maPhim: 1404,
    tenPhim: "Mắt biếc",
    biDanh: "mat-biec",
    trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/mat-biec_gp01.png",
    moTa: "Trứng rán cần mỡ, bắp cần bơ, yêu không cần cớ, cần cậu cơ <3",
    maNhom: "GP01",
    ngayKhoiChieu: "2019-07-29T00:00:00",
    danhGia: 9,
  },
  {
    maPhim: 1419,
    tenPhim: "Hai đứa trẻ",
    biDanh: "hai-dua-tre",
    trailer: "https://www.youtube.com/embed/AAgnQdiZFsQ",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/hai-dua-tre_gp01.png",
    moTa: "Hiểu",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-22T00:00:00",
    danhGia: 7,
  },
  {
    maPhim: 1434,
    tenPhim: "abcabc",
    biDanh: "abcabc",
    trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/abcabc_gp01.png",
    moTa:
      "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-30T00:00:00",
    danhGia: 2,
  },
  {
    maPhim: 1449,
    tenPhim: "True Detective",
    biDanh: "true-detective",
    trailer: "https://www.youtube.com/embed/TXwCoNwBSkQ",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/truedetective.jpg",
    moTa:
      "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    maNhom: "GP01",
    ngayKhoiChieu: "2019-07-29T00:00:00",
    danhGia: 5,
  },
  {
    maPhim: 1464,
    tenPhim: "The Longest Ride",
    biDanh: "the-longest-ride",
    trailer: "https://www.youtube.com/embed/FUS_Q7FsfqU",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
    moTa:
      "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
    maNhom: "GP01",
    ngayKhoiChieu: "2019-07-29T00:00:00",
    danhGia: 5,
  },
  {
    maPhim: 1479,
    tenPhim: "Đẹp gái không có gì sai",
    biDanh: "dep-gai-khong-co-gi-sai",
    trailer: "https://www.youtube.com/embed/0M15BMH8K1I",
    hinhAnh:
      "http://movie0706.cybersoft.edu.vn/hinhanh/dep-gai-khong-co-gi-sai_gp01.png",
    moTa: "Chào bé Lê Văn Đạt, em còn làm ở đó hông ta?",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-03-12T00:00:00",
    danhGia: 4,
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default === "#fff" ? "#000" : "#fff",
    color: theme.palette.background.default === "#fff" ? "#fff" : "#000",
  },
}));

export default function CarouselMovie() {
  const classes = useStyle();
  return (
    <div id="carousel__movie">
      <Swiper
        effect="coverflow"
        slidesPerView="auto"
        pagination
        grabCursor
        centeredSlides
        coverflowEffect={{ rotate: 60 }}
      >
        {movieList.map((item, index) => {
          return (
            <SwiperSlide key={index} className={classes.root}>
              <div className="imgBx">
                <img src={item.hinhAnh} alt={item.biDanh} />
              </div>
              <div className="detail">
                <h3>{item.tenPhim}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
