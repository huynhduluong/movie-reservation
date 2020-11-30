import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  bgAccor: {
    background: "transparent",
    borderBottom: "1px solid rgba(255, 255, 255, 0.54)",
  },
  avatar: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    marginRight: "15px",
  },
  nameCinemaSystem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
    textTransform: "capitalize",
  },
  nameCinema: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
  },
  address: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
  },
  expandIcon: {
    color: "rgba(255, 255, 255, 0.54)",
    transform: "rotate(0deg)",
  },
  cinemaItem: {
    margin: "0px",
    padding: "10px 20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.54)",
  },
}));

const cinemaArray = [
  {
    maHeThongRap: "BHDStar",
    tenHeThongRap: "BHD Star Cineplex",
    biDanh: "bhd-star-cineplex",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  },
  {
    maHeThongRap: "CGV",
    tenHeThongRap: "cgv",
    biDanh: "cgv",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
  },
  {
    maHeThongRap: "CineStar",
    tenHeThongRap: "CineStar",
    biDanh: "cinestar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
  },
  {
    maHeThongRap: "Galaxy",
    tenHeThongRap: "Galaxy Cinema",
    biDanh: "galaxy-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  },
  {
    maHeThongRap: "LotteCinima",
    tenHeThongRap: "Lotte Cinema",
    biDanh: "lotte-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  },
  {
    maHeThongRap: "MegaGS",
    tenHeThongRap: "MegaGS",
    biDanh: "megags",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
  },
];

const rapArray = [
  {
    maCumRap: "bhd-star-cineplex-3-2",
    tenCumRap: "BHD Star Cineplex - 3/2",
    diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    danhSachRap: [
      {
        maRap: 451,
        tenRap: "Rạp 1",
      },
      {
        maRap: 452,
        tenRap: "Rạp 2",
      },
      {
        maRap: 453,
        tenRap: "Rạp 3",
      },
      {
        maRap: 454,
        tenRap: "Rạp 4",
      },
      {
        maRap: 455,
        tenRap: "Rạp 5",
      },
      {
        maRap: 456,
        tenRap: "Rạp 6",
      },
      {
        maRap: 457,
        tenRap: "Rạp 7",
      },
      {
        maRap: 458,
        tenRap: "Rạp 8",
      },
      {
        maRap: 459,
        tenRap: "Rạp 9",
      },
      {
        maRap: 460,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-bitexco",
    tenCumRap: "BHD Star Cineplex - Bitexco",
    diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
    danhSachRap: [
      {
        maRap: 461,
        tenRap: "Rạp 1",
      },
      {
        maRap: 462,
        tenRap: "Rạp 2",
      },
      {
        maRap: 463,
        tenRap: "Rạp 3",
      },
      {
        maRap: 464,
        tenRap: "Rạp 4",
      },
      {
        maRap: 465,
        tenRap: "Rạp 5",
      },
      {
        maRap: 466,
        tenRap: "Rạp 6",
      },
      {
        maRap: 467,
        tenRap: "Rạp 7",
      },
      {
        maRap: 468,
        tenRap: "Rạp 8",
      },
      {
        maRap: 469,
        tenRap: "Rạp 9",
      },
      {
        maRap: 470,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-pham-hung",
    tenCumRap: "BHD Star Cineplex - Phạm Hùng",
    diaChi: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
    danhSachRap: [
      {
        maRap: 471,
        tenRap: "Rạp 1",
      },
      {
        maRap: 472,
        tenRap: "Rạp 2",
      },
      {
        maRap: 473,
        tenRap: "Rạp 3",
      },
      {
        maRap: 474,
        tenRap: "Rạp 4",
      },
      {
        maRap: 475,
        tenRap: "Rạp 5",
      },
      {
        maRap: 476,
        tenRap: "Rạp 6",
      },
      {
        maRap: 477,
        tenRap: "Rạp 7",
      },
      {
        maRap: 478,
        tenRap: "Rạp 8",
      },
      {
        maRap: 479,
        tenRap: "Rạp 9",
      },
      {
        maRap: 480,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-vincom-le-van-viet",
    tenCumRap: "BHD Star Cineplex - Vincom Lê Văn Việt",
    diaChi: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
    danhSachRap: [
      {
        maRap: 481,
        tenRap: "Rạp 1",
      },
      {
        maRap: 482,
        tenRap: "Rạp 2",
      },
      {
        maRap: 483,
        tenRap: "Rạp 3",
      },
      {
        maRap: 484,
        tenRap: "Rạp 4",
      },
      {
        maRap: 485,
        tenRap: "Rạp 5",
      },
      {
        maRap: 486,
        tenRap: "Rạp 6",
      },
      {
        maRap: 487,
        tenRap: "Rạp 7",
      },
      {
        maRap: 488,
        tenRap: "Rạp 8",
      },
      {
        maRap: 489,
        tenRap: "Rạp 9",
      },
      {
        maRap: 490,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-vincom-quang-trung",
    tenCumRap: "BHD Star Cineplex - Vincom Quang Trung",
    diaChi: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
    danhSachRap: [
      {
        maRap: 491,
        tenRap: "Rạp 1",
      },
      {
        maRap: 492,
        tenRap: "Rạp 2",
      },
      {
        maRap: 493,
        tenRap: "Rạp 3",
      },
      {
        maRap: 494,
        tenRap: "Rạp 4",
      },
      {
        maRap: 495,
        tenRap: "Rạp 5",
      },
      {
        maRap: 496,
        tenRap: "Rạp 6",
      },
      {
        maRap: 497,
        tenRap: "Rạp 7",
      },
      {
        maRap: 498,
        tenRap: "Rạp 8",
      },
      {
        maRap: 499,
        tenRap: "Rạp 9",
      },
      {
        maRap: 500,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-vincom-thao-dien",
    tenCumRap: "BHD Star Cineplex - Vincom Thảo Điền",
    diaChi: "L5-Megamall, 159 XL Hà Nội, Q.2",
    danhSachRap: [
      {
        maRap: 501,
        tenRap: "Rạp 1",
      },
      {
        maRap: 502,
        tenRap: "Rạp 2",
      },
      {
        maRap: 503,
        tenRap: "Rạp 3",
      },
      {
        maRap: 504,
        tenRap: "Rạp 4",
      },
      {
        maRap: 505,
        tenRap: "Rạp 5",
      },
      {
        maRap: 506,
        tenRap: "Rạp 6",
      },
      {
        maRap: 507,
        tenRap: "Rạp 7",
      },
      {
        maRap: 508,
        tenRap: "Rạp 8",
      },
      {
        maRap: 509,
        tenRap: "Rạp 9",
      },
      {
        maRap: 510,
        tenRap: "Rạp 10",
      },
    ],
  },
];

export default function CinemaTabs(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderCinema = () => {
    return rapArray.map((item, index) => {
      return (
        <div key={index} className={classes.cinemaItem}>
          <Typography className={classes.nameCinema}>
            {item.tenCumRap}
          </Typography>
          <Typography className={classes.address}>{item.diaChi}</Typography>
        </div>
      );
    });
  };

  const renderCinemaSystem = () => {
    return cinemaArray.map((item, index) => {
      return (
        <Accordion
          expanded={expanded === item.maHeThongRap}
          onChange={handleChange(item.maHeThongRap)}
          className={classes.bgAccor}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls={`${item.maHeThongRap}-content`}
            id={`${item.maHeThongRap}-header`}
          >
            <Avatar
              className={classes.avatar}
              alt={item.logo}
              src={item.logo}
            />
            <Typography className={classes.nameCinemaSystem}>
              {item.tenHeThongRap}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{renderCinema()}</AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div className={classes.root}>{renderCinemaSystem()}</div>;
}
